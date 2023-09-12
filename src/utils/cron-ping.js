const nodeCron = require('node-cron');
const sendMail = require('./sendMail');

// Schedule tasks to be run on the server.
const job = nodeCron.schedule('* * * * *', function() {
  const messagePayload = {
    to: [
      'annabeladaeze@gmail.com',

    ],
    subject: 'Holla!'
  };
  sendMail.sendDailyMail(messagePayload);
  console.log('email sent')
  
  });

  module.exports = job;
