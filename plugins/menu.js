
let handler = async (m, { usedPrefix }) => {

const os = require('os')
    let context = `


🎈 𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 : 𝑴𝑹-𝑴𝑫

🎈 𝐋𝐈𝐁𝐑𝐀𝐑𝐘   : 𝐁𝐚𝐢𝐥𝐞𝐲𝐬-𝐌𝐃

🎈 𝐔𝐏𝐓𝐈𝐌𝐄    : ${uptime}

🎈 𝐕𝐄𝐑𝐒𝐈𝐎𝐍   : ${version}

🎈 𝐒𝐓𝐀𝐓𝐔𝐒    : 𝑷𝑼𝑩𝑳𝑰𝑪 

🎈 𝐓𝐎𝐓𝐀𝐋 𝐔𝐒𝐄𝐑𝐒 : ${user}

🎈 𝐑𝐄𝐆𝐈𝐒𝐓𝐄𝐑𝐄𝐃 : ${users+5}

🎈 𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌: ${os.type()}

 `
await conn.sendTBI2(m.chat, context.trim(), wm,thumburl,`ɪɴꜱᴛᴀɢʀᴀᴍ `, `http://instagram.com/_munavir._`, null,null, `ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅs`, `${ usedPrefix}lst`,m)
}
handler.help = ['ᴍᴇɴᴜ']
handler.tags = ['main']
handler.command = /^(menu|help|list)$/i


module.exports = handler
