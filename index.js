const {
WA_DEFAULT_EPHEMERAL,
jidDecode, proto,
makeInMemoryStore,
downloadContentFromMessage,
getAggregateVotesInPollMessage,
generateWAMessageFromContent,
generateWAMessageContent,
generateWAMessage,
prepareWAMessageMedia,
makeWASocket,
useMultiFileAuthState,
DisconnectReason,
areJidsSameUser,
getContentType,
buttonMessage
} = require('@whiskeysockets/baileys')
const { Boom } = require('@hapi/boom')
const FileType = require('file-type')
const yargs = require('yargs/yargs')
const path = require('path')
const chalk = require('chalk')
const fs = require('fs')
const pino = require('pino')
const _ = require('lodash')
const readline = require("readline");
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
return new Promise((resolve) => {
rl.question(text, resolve)
})
};

const Serialize = require('./lib/serialize')
const { imageToWebp, imageToWebp3, videoToWebp, writeExifImg, writeExifImgAV, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')

var low
try {
low = require('lowdb')
} catch (e) {
low = require('./lib/lowdb')}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`data/database/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    anonymous: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()



// save database every 30seconds
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)

async function startBOT() {
const pairingOn = true
const { state, saveCreds } = await useMultiFileAuthState('./sessions')
const gans = makeWASocket ({
logger: pino({ level: "silent" }),
printQRInTerminal: !pairingOn,
auth: state,
browser: ['Ubuntu', 'Chrome', '20.0.04']
});

if(pairingOn && !gans.authState.creds.registered) {
const phoneNumber = await question(('Masukan Nomer Yang Aktif Awali Dengan 62:\n'));
const code = await gans.requestPairingCode(phoneNumber.trim())
console.log(`Masukan PairingCode: ${code}`)
}

gans.ev.on('creds.update', saveCreds)

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

gans.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid}

gans.sendText = (jid, text, quoted = '', options) => gans.sendMessage(jid, { text: text, ...options }, { quoted })
gans.sendTextMentions = async (jid, teks, mention, quoted = '') => {
return gans.sendMessage(jid, { text: teks, mentions: mention }, { quoted })}

gans.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName}

gans.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer} 

gans.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)}
await gans.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}

gans.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)}
await gans.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}

gans.sendTextWithMentions = async (jid, text, quoted, options = {}) => gans.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

gans.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
	size: await getSizeMedia(data),
...type,
data
}
}

gans.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0];
if (!mek.message) return;
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
if (mek.key && mek.key.remoteJid === 'status@broadcast') return;
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return;
let m = Serialize(gans, mek, store)
require("./cdtTeam")(gans, m, chatUpdate, store);
} catch (err) {
console.log(err);
}
});

gans.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
if (reason === DisconnectReason.badSession) {
console.log(`Bad Session File, Please Delete Session and Scan Again`);
process.exit();
} else if (reason === DisconnectReason.connectionClosed) {
console.log("Connection closed, reconnecting....");
startBOT();
} else if (reason === DisconnectReason.connectionLost) {
console.log("Connection Lost from Server, reconnecting...");
startBOT();
} else if (reason === DisconnectReason.connectionReplaced) {
console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
process.exit();
} else if (reason === DisconnectReason.loggedOut) {
console.log(`Device Logged Out, Please Delete Folder Session yusril and Scan Again.`);
process.exit();
} else if (reason === DisconnectReason.restartRequired) {
console.log("Restart Required, Restarting...");
startBOT();
} else if (reason === DisconnectReason.timedOut) {
console.log("Connection TimedOut, Reconnecting...");
startBOT();
} else {
console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
startBOT();
}
} else if (connection === "open") {
console.log(`BERHASIL TERSAMBUNG`);
}
// console.log('Connected...', update)
})
return gans
}
startBOT()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})