import fetch from 'node-fetch'
import { promises, readFileSync } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let imgr = flaaa.getRandom()
let res = JSON.parse(readFileSync('./json/emoji.json'))
let em = res.emoji
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(who)
        if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     let math = max - xp
     let mim_ = ["application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document","text/rtf"]
     let lin_ = ["https://youtu.be/1ytRik_kO2s"]
     
  let cap = `*${htki} Nokos WhatsApp ${htka}*

Ready nokos WhatsApp
Harga
Indo +62 5k
Russia+7 5k
Thailand +66 5k
*Seperti Owner Saya +66*
Canada +1 5k
*Dan lain lain*
Minat? Hubungi wa.me/+66615143033

Apa itu nokos?
*Nokos adalah Nomor kosong yang dijual untuk di verifikasi ke WhatsApp*
Jika anda membeli nokos di saya,
Saya akan kasih nomor, dan anda harus mendaftarkan nomornya ke WhatsApp,
*Nanti saya kasih codenya*`

let weem = `📮 *Note:* Bot ini gratis, Jika ada yang menjualnya, jangan percaya, Culik aja bot nya ke grup kalian, kalo mau:v`
    await conn.sendButton(m.chat, cap, weem, Buffer.alloc(0), [[em.getRandom() + ' All Menu', usedPrefix + 'allmenu'], [em.getRandom() + ' List Menu', usedPrefix + 'menulist']], m, { mimetype: mim_.getRandom(), fileName: ucapan, pageCount: fpagedoc, fileLength: fsizedoc, seconds: fsizedoc, jpegThumbnail: await( await fetch(thumbnailUrl.getRandom())).buffer(), contextInfo: {
          externalAdReply :{
          showAdAttribution: true,
    mediaUrl: lin_.getRandom(),
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name,
    body: botdate,
    thumbnail: await( await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
}

handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
