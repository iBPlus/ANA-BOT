const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("Yetkili Komutları:",`
p!ᴏᴛᴏᴛᴀɢ: sᴜɴᴜᴄᴜʏᴀ ɢɪʀᴇɴ ᴋɪsɪʟᴇʀ ɪᴄɪɴ ᴏᴛᴏ ᴛᴀɢ ᴠᴇʀɪʀ.
p!ᴄɪᴋɪs-ᴍᴇsᴀᴊ-ᴀʏᴀʀʟᴀ: ᴄɪᴋɪs ᴍᴇsᴀᴊɪɴɪ ᴅᴇɢɪsᴛɪʀᴍᴇɴɪᴢɪ sᴀɢʟᴀʀ.
p!sᴀ-ᴀs: sᴀ-ᴀs ᴀʏᴀʀʟᴀʀ.
p!sᴀʏᴀᴄ: sᴀʏᴀᴄ <sᴀʏɪ> <#ᴋᴀɴᴀʟ>
p!ᴏᴛᴏʀᴏʟ: sᴜɴᴜᴄᴜʏᴀ ɢɪʀᴇɴʟᴇʀᴇ ᴠᴇʀɪʟᴇᴄᴇᴋ ᴏʟᴀɴ ᴏᴛᴏʀᴏʟᴜ ᴀʏᴀʀʟᴀʀ.
p!ᴋᴀᴘᴀᴛᴏᴛᴏʀᴏʟ: ᴏᴛᴏʀᴏʟ ᴋᴀᴘᴀᴛᴍᴀ ɪsᴇ ʏᴀʀᴀʀ.
p!ᴏʏʟᴀᴍᴀ-ᴋᴀɴᴀʟ: ᴏʏʟᴀᴍᴀ ᴋᴀɴᴀʟɪɴɪ sᴇᴄᴍᴇɴɪᴢᴇ ʏᴀʀᴀʀ.
p!ᴅᴜʏᴜʀᴜ-ᴋᴀɴᴀʟ-ᴀʏᴀʀʟᴀ: ᴅᴜʏᴜʀᴜ ᴋᴀɴᴀʟɪɴɪ ʙᴇʟɪʀʟᴇʀ.
p!ᴍᴏᴅ-ʟᴏɢ-ᴀʏᴀʀʟᴀ: ᴍᴏᴅᴇʀᴀsʏᴏɴ ᴋᴀʏɪᴛʟᴀʀɪ ᴋᴀɴᴀʟɪɴɪ ᴀʏᴀʀʟᴀʀ.
p!gç: ʀᴇsɪᴍʟɪ ʜɢ ᴋᴀɴᴀʟɪɴɪ ʙᴇʟɪʀʟᴇʀ.
p!ʙᴀɴ: ɪsᴛᴇᴅɪɢɪɴɪᴢ ᴋɪsɪʏɪ ʙᴀɴʟᴀʀ.
p!ᴅᴜʏᴜʀᴜ: ᴅᴜʏᴜʀᴜ sɪsᴛᴇᴍɪ.
p!ʟɪɴᴋ-ᴇɴɢᴇʟʟᴇ: ʟɪɴᴋ ᴇɴɢᴇʟʟᴇᴍᴇ sɪsᴛᴇᴍɪɴɪ ᴀᴄɪᴘ ᴋᴀᴘᴀᴛᴍᴀɴɪᴢɪ sᴀɢʟᴀʀ.
p!sᴜɴᴜᴄᴜ-ᴋᴜʀ: ʙᴜʟᴜɴᴜʟᴀɴ sᴜɴᴜᴄᴜ ɪᴄɪɴ ɢᴇʀᴇᴋʟɪ ᴋᴀɴᴀʟʟᴀʀɪ ᴏʟᴜsᴛᴜʀᴜʀ.
p!ʟᴏɢ-ᴀʏᴀʀʟᴀ: ʟᴏɢ ᴋᴀɴᴀʟɪ ᴀʏᴀʀʟᴀsɪɴɪᴢ.
p!ʀᴇᴋʟᴀᴍ-ᴛᴀʀᴀᴍᴀsɪ: ᴋᴜʟʟᴀɴɪᴄɪʟᴀʀɪɴ ᴏʏɴᴜʏᴏʀ ᴍᴇsᴀᴊɪɴᴅᴀᴋɪ ᴠᴇ ᴋᴜʟʟᴀɴɪᴄɪ ᴀᴅʟᴀʀɪɴᴅᴀᴋɪ ʀᴇᴋʟᴀᴍʟᴀʀɪ ᴛᴀʀᴀʀ.
p!küfür-engel: Küfür Engeli Açarsınız. (yeni!)
p!güvenlik #kanal: Güvenlik Kanalını Belirlersiniz. (yeni!)
`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili','yetkilis'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'yetkili'
};
