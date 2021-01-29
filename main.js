
const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');
const { emitKeypressEvents } = require('readline');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once ('ready', () => {
    console.log('Darkis bot je online!');
    client.user.setActivity('Your mom!', { type: 'PLAYING'});
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Members');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('612000250500087821').send(`Dobrodosao <@${guildMember.user.id}> na Darkis Gaming discord server!`)
});
    


client.on('message', message =>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if(command === 'mute'){
        client.commands.get('mute').execute(message, args);
    } else if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } else if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }          
        


});

client.login(process.env.token);