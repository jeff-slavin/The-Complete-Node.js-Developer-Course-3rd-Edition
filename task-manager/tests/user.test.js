const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');
const { userOneId, userOne, setupDatabase } = require('./fixtures/db');

beforeEach(setupDatabase);

// afterEach(() => {
//     console.log('afterEach');
// });

test('Should signup a new user', async () => {
    const response = await request(app).post('/users').send({
        name: 'Jeff',
        email: 'jeff@example.com',
        password: 'MyPass777!'
    }).expect(201);

    // Assert that the database was changed correctly
    const user = await User.findById(response.body.user._id);
    expect(user).not.toBeNull();

    // Asertions about the response
    // expect(response.body.user.name).toBe('Jeff');
    expect(response.body).toMatchObject({
        user: {
            name: 'Jeff',
            email: 'jeff@example.com',
        },
        token: user.tokens[0].token
    });

    expect(user.password).not.toBe('MyPass777!');
});

test('Should login existing user', async () => {
    const response = await request(app).post('/users/login').send({
       email: userOne.email,
       password: userOne.password 
    }).expect(200);

    // Does token returned match the 2nd token in the database (2nd token because we created a token on create user, logging in creates a second)
    const user = await User.findById(userOneId);
    expect(response.body.token).toBe(user.tokens[1].token);


});

test('Should not login nonexistent user', async () => {
    await request(app).post('/users/login').send({
        email: 'bademailaddress@example.com',
        password: 'badpassword!'
    }).expect(400);
});

test('Should get profile for user', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
});

test('Should not get profile for unauthenticated user', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401);
});

test('Should delete account for user', async () => {
    await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);

    // Ensure user no longer exists in the database
    const user = await User.findById(userOneId);
    expect(user).toBeNull();
});

test('Should not delete account for unauthenticated user', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401);
});

test('Should upload avatar image', async () => {
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .attach('avatar', 'tests/fixtures/profile-pic.jpg')
        .expect(200);

    const user = await User.findById(userOneId);
    expect(user.avatar).toEqual(expect.any(Buffer));    // checks that user.avatar is a buffer (not looking at actual value)
});

test('Should update valid user fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name: 'Larry'
        })
        .expect(200);

    const user = await User.findById(userOneId);
    expect(user.name).toEqual('Larry');
});

test('Should not update invalid user fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            location: 'Denver'
        })
        .expect(400);
});