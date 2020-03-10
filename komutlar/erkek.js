const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  let user = message.member
  let guild = message.guild

  let rol = guild.roles.find('name', 'Uye' , )
  let isim = args[0]


  if (!isim) return message.channel.send(` İsmini girmelisin.`)


  user.setNickname(`${isim}`)
  user.addRole(662328771356917761)
  message.channel.send(`${message.author} Support İyi Eğlenceler Diler Sunucuya Başarıyla Kaydoldun!`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kayıt-ol',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'kayıt isim yaş'
}
