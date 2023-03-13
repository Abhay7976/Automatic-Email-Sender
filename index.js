const cron = require('node-cron');
const nodemailer = require('nodemailer');

const send = async () => {
    // create reusable transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'yourShubhChintak@outlook.com',
            pass: '@Intern10'
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'yourShubhChintak@outlook.com', // sender address
        to: 'iamabhay122001@gmail.com', // list of receivers
        subject: 'Greetings', // zSubject line
        text: 'Hello sir', // plain text body
        // html: '<b>Hello world!</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}





async function myFunction() {
    console.log('Running myFunction...');
    const result = await send()

}
// 
// 39 11 * * *
var task = cron.schedule('14 19 * * *', function () {
    myFunction();
}, {
    scheduled: true,
    timezone: "Asia/Kolkata"
}
);

task.start();

