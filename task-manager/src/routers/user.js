const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth');
const User = require('../models/user');

router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    };
});

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch(error) {
        res.status(400).send();
    };
});

// logs out of a single session
router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token;
        });
        await req.user.save();

        res.send();
    } catch (error) {
        res.status(500).send();
    };
});

//logs out of all sessions
router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();
        res.send();
    } catch (error) {
        res.status(500).send();
    };
});

// Adding middleware here (by including our middleware as the 2nd parameter and pushing our function to the third)
// router.get('/users', auth, async (req, res) => {
//     try {
//         const users = await User.find({});
//         res.send(users);
//     } catch (error) {   
//         res.status(500).send();
//     };
// });

router.get('/users/me', auth, async (req, res) => {
    // This function only runs if the middleware validates the user (via authentication)
    // Middleware also assigns the req.user value
    res.send(req.user);
});

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const user = await User.findById(_id);

        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send();
    };
});

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if(!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates' });
    };

    try {
        // this bypasses any middleware (e.g. 'save' middleware) - not ideal for us;
        // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        const user = await User.findById(req.params.id);

        updates.forEach((update) => user[update] = req.body[update]);
        await user.save();

        if (!user) {
            return res.status(404).send();
        };

        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    };
});

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).send();
        };

        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    };
});

module.exports = router;