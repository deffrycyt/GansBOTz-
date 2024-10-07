const fs = require('fs')
const chalk = require('chalk')

global.creator = "6289630721021@s.whatsapp.net"
global.premiun = '6289630721021'
global.owner = ["6289630721021"]
global.ownerName = 'Deffri Gans'
global.botname = "GansBOTz"
global.packname = "Sticker by"
global.author = "GansBOTz Gans"

global.limitawal = 100

global.prefa = ['','!','.',',','🐤','🗿']

global.mess = {
    vip: 'ᴋʜᴜsᴜs ᴍᴇᴍʙᴇʀ ᴠɪᴘ ᴄᴜʏ!',
    owner: 'ᴋʜᴜsᴜs ᴏᴡɴᴇʀ ᴄᴜʏ!',
    wait: 'ᴘʀosᴇs ᴄᴜʏ...!',
    done: 'sᴜᴋsᴇs ᴄᴜʏ!',
    group: 'ʜᴀɴʏᴀ ʙɪsᴀ ʙɪsᴀ ᴅɪɢᴜɴᴀᴋᴀɴ ᴅɪᴅᴀʟᴀᴍ ɢʀᴏᴜᴘ ᴄᴜʏ!',
    admin: 'ᴋʜᴜsᴜs ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ ᴄᴜʏ!',
    botAdmin: 'ʙᴏᴛ ɴʏᴀ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ ᴄᴜʏ!',
    linkvalid: 'ʟɪɴᴋ ɴʏᴀ ɢᴀ ᴠᴀʟɪᴅ ᴄᴜʏ!', 
    error: 'ᴇʀʀᴏʀ ᴄᴜʏ!',
    limit: `ʟɪᴍɪᴛ ʜᴀʀɪᴀɴ ᴋᴀᴍᴜ sᴜᴅᴀʜ ʜᴀʙɪs ᴄᴜʏ!\nκᴇтικ .ʙuʏʟιмιт uɴтuκ мᴇмʙᴇʟι ʟιмιт`
}

global.egg = "15"
global.nestid = "6"
global.loc = "1"
global.domain = "https://deffrigans.mypanel-ku.my.id"
global.apikey = "ptla_uK8c3yUqkGWjBh44zFFvN5AlMV0HGxhrknPp8R6Ejor" 
global.capikey = "ptlc_flESsNiKlxkAj4H8FTBcEMXzfA8T2njoxFmQrMmcUW8" //ptlc
global.imgpanel = fs.readFileSync("./lib/Panel.jpg")

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})