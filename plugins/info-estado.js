let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './media2/4.jpeg'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado =`
╭─[ *𝐍𝐞𝐊𝐨𝐬𝐦𝐢𝐜 - 𝐁𝐨𝐭* ]
│ *➤ 𝙷𝙾𝙻𝙰 ${name}*
│
│ *ミ🤖 𝙴𝚂𝚃𝙰𝙳𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃 🤖彡*
│ *=> 𝙱𝙾𝚃 𝙰𝙲𝚃𝙸𝚅𝙾 ✅*
│ *=> 𝙱𝙾𝚃 𝙳𝙴 𝚄𝚂𝙾 𝙿𝚄𝙱𝙻𝙸𝙲𝙾 ✅*
│ *=> 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}*
│ *=> http://atom.bio/nekosmic-nk*
╰───────────────
`.trim()

conn.sendHydrated(m.chat, estado, wm, picture, 'https://www.instagram.com/invites/contact/?i=lwv1dph6f3rt&utm_content=ohvhscn', '👑𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼👑', null, null, [
['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']
], m)}

handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|stado|stats)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
