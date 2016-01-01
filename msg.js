
var commands = require('./commands.js').commands;


exports.processMessage = function(bot, msg)
{
  var message = msg.content;

  if(message.indexOf(bot.user.mention()) === 0){


    var args = msg.content.slice(bot.user.mention().length + 1).split(" ");

    if(commands[args[0]]){
      return commands[args[0]].execute(args, msg, bot);
    } else {
      return "`I'm afraid I can't do that,`" +msg.author.mention() + "`...`";
    }

  }else if(message.indexOf("*") === 0 && msg.author.username != bot.user.username){


    return "I'm afraid I can't do that, " + msg.author.mention() + "...";

  }

}


//@MTTBot Barbara
//012345678
//--------      mention length
