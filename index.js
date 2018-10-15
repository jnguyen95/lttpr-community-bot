const Discord = require('discord.js');
const client = new Discord.Client();
const Stopwatch = require('statman-stopwatch');
const timeconverter = require('./Modules/timeconverter.js');

client.on("message", async message => {
    if (message.author.bot) return;

    if (message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split (/ +/g);
    const command = args.shift().toLowerCase();
    console.log(command);
    console.log(args.join(" "));

    switch(command) {
        case "create":
            break;
        case "races":
            break;
        case "raceinfo":
            break;
        case "join":
            break;
        case "leave":
            break;
        case "remove":
            break;
        case "done":
            break;
        case "forfeit":
            break;
        case "result":
            break;
        case "start":
            break;
        default:
            break;
    }
})

client.login();