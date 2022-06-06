let handler = async (m, {conn}) => {
  conn.sendTBI(m.chat, ``, wm, 'https://i.imgur.com/71XYObV.jpeg', ``, ``, null, null, '𝙼𝚎𝚗𝚞', `.menu`, null, null, null, null, m) 
}
handler.help = ['sᴏᴜʀᴄᴇᴄᴏᴅᴇ','ɢɪᴛ']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode|git)$/i

module.exports = handler


