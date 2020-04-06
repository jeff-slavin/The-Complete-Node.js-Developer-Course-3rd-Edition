const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = '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';

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
    to: 'jeff.slavin@outlook.com',
    from: 'jeff.slavin@outlook.com',
    subject: 'This is my first creation!',
    text: 'I hope this one actually gets to you.'
});