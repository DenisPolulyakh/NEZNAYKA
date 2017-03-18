var Botkit = require('botkit');

var controller = Botkit.slackbot({
  debug: false
  //include "log: false" to disable logging
  //or a "logLevel" integer from 0 to 7 to adjust logging verbosity
});

// connect the bot to a stream of messages
controller.spawn({
  token: "xoxb-156264201075-Iupkp3VjhnffgigGouOVLZN6",
}).startRTM()

function getJSONProperty(bodyJson, property) {
    body = JSON.parse(bodyJson);
    if (property == 'phrase') {
        return body.phrase;
    }
}

// give the bot something to listen for.
controller.hears('',['direct_message','direct_mention','mention'],function(bot,message) {
	console.log(message.text);
  	var request = require('request');
	var address = 'https://neznayka-front-controller.herokuapp.com/getAnswer?message=' + encodeURIComponent(message);
        request.get(address, function (error, response, body) {
           bot.reply(message,body);

        });  
});

