var Discord = require("discord.js");
var Config = require("./config.json");
var MessageHandler = require("./msg.js");
//var Util = require("./util.js");

var email = Config.login.email;
var pass  = Config.login.password;

var bot = new Discord.Client();

bot.verbose = true;

//when the bot is ready
bot.on("ready", function () {
	console.log("Ready to begin! Serving in " + bot.channels.length + " channels");
});

//when the bot disconnects
bot.on("disconnected", function () {
	//alert the console
	console.log("Disconnected!");

	//exit node.js with an error
	process.exit(1);
});

//when the bot receives a message
bot.on("message", function (msg) {

	var reply = MessageHandler.processMessage(bot, msg);


	if(bot.verbose){
		bot.sendMessage(msg.channel, reply);
	}

});

bot.login(email, pass);
