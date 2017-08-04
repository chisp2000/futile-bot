//          (
//          )\ )          )     (           (           )
//         (()/(   (   ( /( (   )\   (    ( )\       ( /(
//       (_)) ))\  )\()))\ ((_) ))\   )((_)  (   )\())
//       (_))_|/((_)(_))/((_) _  /((_) ((_)_   )\ (_))/
//       | |_ (_))( | |_  (_)| |(_))    | _ ) ((_)| |_
//       | __|| || ||  _| | || |/ -_)   | _ \/ _ \|  _|
//       |_|   \_,_| \__| |_||_|\___|   |___/\___/ \__|


var Discord = require("discord.js");
var Futile = new Discord.Client();


Futile.login("xxx");
  //Client ID: xxx
  // Client ID link: https://discordapp.com/oauth2/authorize?&client_id=YYY&scope=bot

Futile.on('ready', () => {
  console.log('Futile-bot is ready');
});


//Helpdesk (må fikse)
Futile.on("message", msg => {

//Prefix commands
  let prefix = "/!";

  if(!msg.content.startsWith(prefix)) return;
  //event handler:
  if(msg.author.bot) return;


    else if (msg.content.startsWith(prefix + "auditor")) {
      msg.reply("I'm listening to your every move. http://youarelistening.to/newyork ");
    }

    else if (msg.content.startsWith(prefix + "duckquery")) {
      msg.channel.sendMessage("kvassy, add duckquery");
    }

    else if (msg.content.startsWith(prefix + "nek")) {
      msg.channel.sendMessage("https://en.wikipedia.org/wiki/Nek");
    }
});

//AI Commands.
Futile.on("message", msg => {
  if (msg.isMentioned(Futile.user)) {
    msg.reply("Hi, I'm Futile bot!")
  }
})

//Ping-and-respond commands.
Futile.on("message", msg => {

  if (msg.content.match(/ping/i)) {
      msg.channel.sendMessage("pong!");
  }

  else if (msg.content.match(/foo/i)) {
    msg.channel.sendMessage("bar!");
  }

  else if (msg.content.match(/uwu/i)) {
    msg.channel.sendMessage("OwO");
  }

  else if (msg.content.startsWith("ching")) {
    //Add ping pong rhyme
    msg.channel.sendMessage("chong!");
  }

  else if (msg.content.startsWith("!" || len("!") > 4)) {
    msg.channel.sendMessage("https://a.cocaine.ninja/gdqran.png");
  }

})
