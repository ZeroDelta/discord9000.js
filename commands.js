var help = require('./help.json');

var commands = {
  "say": {
    execute: function(args, msg, bot) {

      var prompt = args.join(" ").slice(4);


      return prompt;

    }},

    "help": {
      execute: function(args, msg, bot) {
        var page;
        if(args.length > 1){
          if (help[args[1]].length >= 1){
            page = help[args[1]].join("\n");
          }

        } else {
          page = help[""].join("\n");
        }

        return page;
      }},

      "verbose": {
        execute: function(args, msg, bot) {
          var authorPerm = msg.channel.permissionsOf(msg.author);
          if(authorPerm.hasPermission("kickMembers")){
            if(args[1] === "true"){
              bot.verbose = true;
              bot.sendMessage(msg.channel, "`How may I assist you...?`");
            }else {
              bot.verbose = false;
              bot.sendMessage(msg.channel, "`I'm muted? How...unfortunate.`");
            }
            return "`...`";
          } else {
            return "`I'm afraid I can't let you do that, `" + msg.author.mention() + "`...`";
          }
        }}
};

module.exports.commands = commands;
