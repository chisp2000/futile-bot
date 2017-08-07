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

//Prefix commands
Futile.on("message", msg => {
  let prefix = "/!";
  if(!msg.content.startsWith(prefix)) return;
  //event handler:
  if(msg.author.bot) return;
      //you are listening to
      else if (msg.content.startsWith(prefix + "auditor")) {
        msg.reply("I'm listening to your every move. http://youarelistening.to/newyork");
       //duckquery
    } else if (msg.content.startsWith(prefix + "duckquery")) {
        var ducks = [
        {file: "./img/ducks1.jpg"}, {file: "./img/ducks2.jpg"}, {file: "./img/ducks3.jpg"},
        {file: "./img/ducks4.jpg"}, {file: "./img/ducks5.jpg"}, {file: "./img/ducks6.jpg"},
		    {file: "./img/ducks7.jpg"}, {file: "./img/ducks8.jpg"}, {file: "./img/ducks9.jpg"},
		    {file: "./img/ducks10.jpg"}, {file: "./img/ducks11.jpg"}, {file: "./img/ducks12.jpg"}];

        var duck = ducks[Math.floor(Math.random()*ducks.length)];
        msg.channel.send(duck);
       //Nek
    } else if (msg.content.startsWith(prefix + "nek")) {
        msg.channel.send("https://en.wikipedia.org/wiki/Nek");
    }
});

//AI Commands.
Futile.on("message", msg => {
  if (msg.isMentioned(Futile.user)) {
    msg.reply("Hi, I am Futile bot.");
  }
})

//Ping-and-respond commands.
Futile.on("message", msg => {
  if (msg.content.match(/uwu/i)) {
    msg.channel.send("OwO");
    } else if (msg.content.startsWith("!" || len("!") > 4)) {
    msg.channel.send({file: "./img/exc.jpg"});
  }})
