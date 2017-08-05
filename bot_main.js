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

Futile.login("MzQzMDAxNDI2MzYxOTc0Nzg0.DGcsUw.5DO_7VCs_ynukmEWagEEgCzAnjs");
  //Client ID: xxx
  // Client ID link: https://discordapp.com/oauth2/authorize?&client_id=YYY&scope=bot

Futile.on('ready', () => {
  console.log('Futile-bot is ready');
});

var prefix = "/!";
Futile.on("message", msg => {
//Prefix commands
  if(!msg.content.startsWith(prefix)) return;
  //event handler:
  if(msg.author.bot) return;
        //you are listening to
      else if (msg.content.startsWith(prefix + "auditor")) {
        msg.reply("I'm listening to your every move. http://youarelistening.to/newyork");
        //duckquery
    } else if (msg.content.startsWith(prefix + "duckquery")) {
        var ducknum = Math.random()
        if (ducknum > 0.917) {
          msg.channel.send( {
            files: [
              "./ducks/ducks1.jpg"
            ]})}
        else if (ducknum > 0.834 && ducknum < 0.917) {
          msg.channel.send( {
            files: [
              "./ducks/ducks2.jpg"
            ]})}
        else if (ducknum > 0.751 && ducknum < 0.834) {
          msg.channel.send( {
            files: [
              "./ducks/ducks3.jpg"
            ]})}
        else if (ducknum > 0.668 && ducknum < 0.751) {
          msg.channel.send( {
            files: [
              "./ducks/ducks4.jpg"
            ]})}
        else if (ducknum > 0.585 && ducknum < 0.668) {
          msg.channel.send( {
            files: [
              "./ducks/ducks4.jpg"
            ]})}
        else if (ducknum > 0.502 && ducknum < 0.585) {
          msg.channel.send( {
            files: [
              "./ducks/ducks5.jpg"
            ]})}
        else if (ducknum > 0.419 && ducknum < 0.502) {
          msg.channel.send( {
            files: [
              "./ducks/ducks6.jpg"
            ]})}
        else if (ducknum > 0.336 && ducknum < 0.419) {
          msg.channel.send( {
            files: [
              "./ducks/ducks7.jpg"
            ]})}
        else if (ducknum > 0.253 && ducknum < 0.336) {
          msg.channel.send( {
            files: [
              "./ducks/ducks8.jpg"
            ]})}
        else if (ducknum > 0.170 && ducknum < 0.253) {
          msg.channel.send( {
            files: [
              "./ducks/ducks9.jpg"
            ]})}
        else if (ducknum > 0.087 && ducknum < 0.170) {
          msg.channel.send( {
              files: [
              "./ducks/ducks10.jpg"
            ]})}
        else if (ducknum > 0.004 && ducknum < 0.087) {
          msg.channel.send( {
            files: [
              "./ducks/ducks11.jpg"
            ]})}
        else if (ducknum > 0.0 && ducknum < 0.004) {
          msg.channel.send( {
            files: [
              "./ducks/ducks12.jpg"
            ]})}
    //Nek
    } else if (msg.content.startsWith(prefix + "nek")) {
        msg.channel.sendMessage("https://en.wikipedia.org/wiki/Nek");
    }
});

//AI Commands.
Futile.on("message", msg => {
  if (msg.isMentioned(Futile.user)) {
    msg.reply("Hi, I am Futile bot.")
  }
})

//Ping-and-respond commands.
Futile.on("message", msg => {
  if (msg.content.match(/uwu/i)) {
    msg.channel.sendMessage("OwO");
    } else if (msg.content.startsWith("!" || len("!") > 4)) {
    msg.channel.sendMessage("https://a.cocaine.ninja/gdqran.png");
  }

})
