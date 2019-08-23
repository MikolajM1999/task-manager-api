const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mikolajmalicki000@gmail.com',
        subject: `Hi ${name}!`,
        text: 'elo'
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail({
        to: email,
        from: 'mikolajmalicki000@gmail.com',
        subject: `Goodbye ${name}!`,
        text: 'We hope that You can tell us what we can do better. Thanks!'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}