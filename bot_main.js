
//  ______  __    __       ___       __   __  ___      ___         .______     ______   .___________.    ____     ___     ___     ___    __   __   __   __
// /      ||  |  |  |     /   \     |  | |  |/  /     /   \        |   _  \   /  __  \  |           |   |___ \   / _ \   / _ \   / _ \  |  | |  | |  | |  |
//|  ,----'|  |__|  |    /  ^  \    |  | |  '  /     /  ^  \       |  |_)  | |  |  |  | `---|  |----`     __) | | | | | | | | | | | | | |  | |  | |  | |  |
//|  |     |   __   |   /  /_\  \   |  | |    <     /  /_\  \      |   _  <  |  |  |  |     |  |         |__ <  | | | | | | | | | | | | |  | |  | |  | |  |
//|  `----.|  |  |  |  /  _____  \  |  | |  .  \   /  _____  \     |  |_)  | |  `--'  |     |  |         ___) | | |_| | | |_| | | |_| | |__| |__| |__| |__|
// \______||__|  |__| /__/     \__\ |__| |__|\__\ /__/     \__\    |______/   \______/      |__|        |____/   \___/   \___/   \___/  (__) (__) (__) (__)



var Discord = require("discord.js");
var Chaika = new Discord.Client();

Chaika.login("xxx");
  //Client ID: xxx
  // Client ID link: https://discordapp.com/oauth2/authorize?&client_id=YYY&scope=bot

Chaika.on('ready', () => {
  console.log('Chaika-bot is ready!!');
});


//Helpdesk (må fikse)
Chaika.on("message", msg => {
  var helpdesk = "orka ikke å ksrive";

//Prefix commands
  let prefix = "-!";

  if(msg.content.startsWith(prefix)) return;
  //event handler:
  if(msg.author.bot) return;

    else if (msg.content.startsWith(prefix + "help")) {
      msg.channel.sendMessage(helpdesk);
    }

    else if (msg.content.startsWith(prefix + "smell")) {
      msg.reply("Smelle d lett!");
    }

    else if (msg.content.startsWith(prefix + "noah")) {
      msg.channel.sendMessage("Hei jeg heter noah og jeg liker å krige mot HRE fordi Milan stronk!");
    }

    else if (msg.content.startsWith(prefix + "nek")) {
      msg.channel.sendMessage("https://en.wikipedia.org/wiki/Nek");
    }
});

//AI Commands.
Chaika.on("message", msg => {
  if (msg.isMentioned(Chaika.user)) {
    msg.reply("Hi! I am Chaika bot!")
  }
})

//Ping-and-respond commands.
Chaika.on("message", msg => {

  if (msg.content.match(/ping/i)) {
      msg.channel.sendMessage("pong!");
  }

  else if (msg.content.match(/foo/i)) {
    msg.channel.sendMessage("bar!");
  }

  else if (msg.content.match(/lett/i)) {
    msg.channel.sendMessage("vanskeli!");
  }

  else if (msg.content.startsWith("ching")) {
    //Add ping pong rhyme
    msg.channel.sendMessage("chong!");
  }

  else if (msg.content.startsWith(msg.content.match("noah"))) {
    msg.channel.sendMessage("Noah e stygg");

  }
  else if (msg.content.startsWith("!" || len("!") > 4)) {
    msg.channel.sendMessage("https://a.cocaine.ninja/gdqran.png");
  }
})
