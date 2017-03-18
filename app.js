var express=require('express');
var bodyParser=require('body-parser');

var app=express();
var port=process.env.PORT||1337;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req,res){res.status(200).send('Hello World!'); });

app.listen(port, function(){
	console.log('Listen on port ' + port);
});

app.post('/hello',function(req, res, next){
	var greeting=["Привет","Здравствуйте","HI","Bonjour","Hola","Салют"];
	var userName=req.body.user_name;
	var userMsg=req.body.text;
	
	var alert=null;
	if((!userName.localeCompare("rdenisov")==0)&&(!userName.localeCompare("alinnik")==0)&&(!userName.localeCompare("anton")==0)){

		/*Поиск номера телефона в сообщении*/
		var number=null;
		if((userMsg.match(/9\d{9}/)!=null && userMsg.match(/9\d{10}/)==null)&&(userMsg.match(/[09,19,29,39,49,59,69,99]\d{10}/)==null)){
			number = userMsg.match(/9\d{9}/);
				
			/* Выбор алгоритма расчета кода */
			var userMsg_low=userMsg.toLowerCase();
			var find = userMsg_low.match(/поиск/);

			var str12345 = number/12345;
			var code =  Math.floor(str12345*1000);
			var responceMsg;	
			if(find!=null){	//поиск карты по номеру телефона
				var day = (new Date()).getDay();
				if(day==0){
					day+=7;
				}
				code = code*day;
				responceMsg="для поиска карты";
			}else{	//код подтвержения телефона
				//код остается изначальным
				responceMsg="активации карты"
			}
			code = code+'';
			code = code.substr(code.length-3,code.length);
			var botPayload={
					text: ''+greeting[getRandomInt(0,5)]+' *'+ userName + '*! Код '+responceMsg+' для телефона ' + number + ': *'+code+'*'
				};
			
			if(userName!=='slackbot'){
				setTimeout(sendMsg,20000);
			} else {
				return res.status(200).end();
			}
			function sendMsg(){
				return res.status(200).json(botPayload);
			}
		}
	}

	function getRandomInt(min, max){
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}



});