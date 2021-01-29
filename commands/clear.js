module.exports = {
    name: 'clear',
    description: "Clear messages!",
   async  execute(message, args) {
        if (!args[0]) return message.reply("Molim te unesi broj koliko poruka zelis obrisat!");

        if(isNaN(args[0])) return message.reply("Molim te unesi realan broj!");

        if(args[0] > 100) return message.reply("Ne mozes obrisati vise od 100 porukaa od jednom!");
        
        if(args[0] < 1) return message.reply("Moras obrisati bar jednu poruku!");

        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
    });

 }
}   