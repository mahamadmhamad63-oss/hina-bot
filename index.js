const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys")

async function startBot() {

const { state, saveCreds } = await useMultiFileAuthState("session")

const sock = makeWASocket({
auth: state,
printQRInTerminal: true
})

sock.ev.on("creds.update", saveCreds)

sock.ev.on("messages.upsert", async ({ messages }) => {

const msg = messages[0]
if (!msg.message) return

const text = msg.message.conversation || msg.message.extendedTextMessage?.text
const from = msg.key.remoteJid

if (text === "اوامر") {

await sock.sendMessage(from,{
text:
`🤖 هينا بوت

اوامر الادمن
فتح
قفل
طرد
خفض
منشن

اوامر المطور
طرد_متعدد
اخرج`
})

}

})

}

startBot()
