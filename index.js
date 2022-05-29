const { Client, Intents, ApplicationCommand, Interaction, TextChannel, Channel, MessageEmbed } = require('discord.js');
const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });
const config = require('./config.json')


/* Example in Node.js */


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})


client.on("messageCreate", (message) => {

    // Jika User mengetik Ping
    if (message.content == `ping`) {
        // Akan di Bales Pong!
        message.reply('Pong!')
    }

    // Jika User mengetik author
    if (message.content == `author`) {
        // Akan di Bales Darwan!
        message.reply('Darwan!')
    }

})




client.login(config.token);