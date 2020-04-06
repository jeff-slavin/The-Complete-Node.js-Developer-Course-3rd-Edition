const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jeff.slavin@outlook.com',
        subject: 'Welcome to the Task Manager!',
        text: `Welcome to the app ${name}. Let me know how you get along with the task app.`
    });
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jeff.slavin@outlook.com',
        subject: 'We are sorry to see you leave the Task Manager',
        text: `Goodbye ${name}. We are sorry to see you leave the Task Manager App. Is there anything we could have done differently to keep you as a customer?`
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
};