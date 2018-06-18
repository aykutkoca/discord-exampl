const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NDU4Mzg2OTkzNDM3NzM2OTY5.DgnFpA.7-X6C4vlenQGzAe6doPkS_hnOEY);//where NDU4Mzg2OTkzNDM3NzM2OTY5.DgnFpA.7-X6C4vlenQGzAe6doPkS_hnOEY is the token of our bot
