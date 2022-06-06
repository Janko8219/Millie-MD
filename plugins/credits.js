let handler = async (m, { usedPrefix}) => {
let credit = `
\t\t\t\t\t\t\t*THANKS TO ALL*














`
 conn.sendTBI(m.chat, credit, wm, 'https://i.imgur.com/71XYObV.jpeg', `INSTA`, `http://instagram.com/_munavir._`, null, null, 'Menu', `${usedPrefix}menu`, null, null, null, null, m) 
}
handler.help = ['credits']
handler.tags = ['info']
handler.command = /^(credits?|thanks?to)$/i

module.exports = handler
