const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(` `)
    .setTitle(`**Nito**`)
    .setDescription(`
    
__Moderator__
︙,lock - ,unlock - ,clear - ,kick
︙,ban - ,unban - ,say 


__Funny__
︙,slap - ,kiss - ,hug


__Gif__
︙,boy - ,girl - ,baby - ,couple
︙,anime - ,cat - ,cartoon - ,smoke
︙,sad 


__Everyone__
︙,invite - ,support - ,about - ,ping
︙,prefix - ,uptime 


[Support](https://discord.gg/6MGtNxJNBk)
[Invite](https://discord.com/api/oauth2/authorize?client_id=837016151795564544&permissions=8&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("PURPLE");
   message.react("<:emoji_4:822203026776391711>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
