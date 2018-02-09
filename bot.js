
	/*var tweet = {
		1: "RÁAAA!! #botmaluco",
		2: "Aqui é o #botmaluco",
		3: "Eu nao uso twitter, só o #botmaluco",
		4: "#botmaluco tweeta por mim",
		5: "Aloooo #botmaluco falandooo",
		6: "#botmaluco aqui",
		0: "#botmaluco aqui1"
	}*/
	/*var tweet = [
		"123 teste RÁAAA!! #botmaluco",
		"Aqui é o #botmaluco",
		"Eu nao uso twitter, só o #botmaluco",
		"#botmaluco tweeta por mim",
		"Aloooo #botmaluco falandooo",
		"loucura loucura #botmaluco aqui",
		"#botmaluco aqui"
	]*/

console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config')

var T = new Twit(config)

tweetIt();
setInterval(tweetIt, 1000*20);

function tweetIt(){
	var r = Math.floor(Math.random()*18);

	var messages = [
		"ÔÔÔHH.. O CAASO tem cajú e a GAPeria!",
		"Pra mim, não existe qualquer outra bateria!",
		"O que eu não quero é uma taça,",
		"Tô aqui pra putaria",
		"Sou GAPeria, toco com raça,",
		"E abafo qualquer outra bateria!",
		"Um brinde com cajú na veia, ",
		"Vamos torcer pra ganhar, ",
		"Mas mesmo que a gente perca... ",
		"Também vamos comemorar!",
		"Eu vou beber, todo o galão, ",
		"Eu vou beber até cair no chão!",
		"Surdo e caixa.. Tamborim ",
		"Todo mundo quer beber.. O cajú até o fim!",
		"Você aí sem fazer nada",
		"Venha torcer com a batucada",
		"Ia jogar.. Juro que ia, ",
		"Mas tô bebendo bem aqui com a GAPeria!"
	]
	var tweet = {
		status: messages[r],
	}

	T.post('statuses/update', tweet, tweeted);
	
	console.log(tweet);
	function tweeted(err, data, response){
		if (err) {
			console.log(err);
		} else {
			console.log("deu bão");
		}
	}
}

