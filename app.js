var Botkit = require('botkit');

var http = require('http');

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

function cutString(strStart,strStop, text) {
        var s=text.indexOf(strStart);
        var e=text.indexOf(strStop)+strStop.length;
        if(s==-1||e==-1) {return text;}
        textId = text.substr(s,e);
        console.log(textId);
        text = text.replace(textId,'').trim();
        return text;
}

// give the bot something to listen for.
controller.hears('',['direct_message','direct_mention','mention'],function(bot,message) {
    var text = cutString("<at id=","</at>",message.text);
    var messageToService = JSON.stringify({ text: text  ,timestamp:message.timestamp,address:message.address });
	console.log(messageToService);
    var request = require('request');
	var address = 'https://neznayka-front-controller.herokuapp.com/getAnswer?message=' + encodeURIComponent(messageToService);
    request.get(address, function (error, response, body) {
        var phrases = getJSONProperty(body, 'phrase');
        bot.reply(message,phrases);
    });  
});

http.createServer(function (request, response) {

    console.log('server');
    

 }).listen(process.env.PORT || 5000);

