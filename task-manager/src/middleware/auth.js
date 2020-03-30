const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'thisismynewcourse');
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

        if(!user) {
            throw new Error();
        };

        req.token = token;  //adding token to our data for req
        req.user = user;    // adding data to our req (so our route handler has this)
        next(); // let route handler run (authentication has been validated)
    } catch (error) {
        res.status(401).send({  error: 'Please authenticate' });
    };
};

// const auth = async (req, res, next) => {
//     console.log('auth middleware');
//     next();
// };

module.exports = auth;