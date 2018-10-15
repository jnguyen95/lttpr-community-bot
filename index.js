const Discord = require('discord.js');
const client = new Discord.Client();
const Stopwatch = require('statman-stopwatch');
const timeconverter = require('./modules/timeconverter.js');
const config = require("./config.json");

client.on("message", async message => {
    if (message.author.bot) return;

    if (message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split (/ +/g);
    const command = args.shift().toLowerCase();
    console.log(command);
    console.log(args.join(" "));

    switch(command) {
        case "create":
            var author = message.author;
            message.channel.send(author.toString() + ', created new race #id!');
            break;
        case "races":
            break;
        case "raceinfo":
            break;
        case "join":
            var author = message.author;
            message.channel.send(author.toString() + ' has joined race #id!');
            break;
        case "leave":
            var author = message.author;
            message.channel.send(author.toString() + ' has left race #id.');
            break;
        case "remove":
            break;
        case "done":
            var author = message.author;
            // Debugging purposes!
            var time = timeconverter.convertToTime(72063);
            message.channel.send(author.toString() + ' has completed race #id with time: ' + time );
            break;
        case "forfeit":
            var author = message.author;
            message.channel.send(author.toString() + ' has forfeited race #id.');
            break;
        case "result":
            break;
        case "start":
            break;
        default:
            break;
    }
})

client.login(config.token);
