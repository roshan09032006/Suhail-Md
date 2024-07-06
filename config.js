const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918219769183";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_15_23_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5LFxuICAgICAgICA2NixcbiAgICAgICAgNzAsXG4gICAgICAgIDMwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDkyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzMsXG4gICAgICAgIDg2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNixcbiAgICAgICAgNjAsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTczLFxuICAgICAgICA0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzksXG4gICAgICAgIDUxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTksXG4gICAgICAgIDk2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIsXG4gICAgICAgIDU3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTExLFxuICAgICAgICA5NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY0FmVVEzOXk0amd3RVBQUGVWSElFdk9mM2Joc1NkVFE4cmUyNHV4MzB3cz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTgyMTk3NjkxODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM1MzY2MjQyOTVEQ0Y1NkRCQUE5MzNDNkZBMzZBRDc4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDI3OTQzNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxODIxOTc2OTE4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzExQjBGMTRDRDM5MTUwMkYwMzhCMTU5NTc5MEMwODFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMjc5NDM0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInlYU3I2WmwzU3NDTDlYc1gxTmwyMkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjhhZTQxNDAtNDA4MC00NTMwLTljNmYtN2UwMWI0ZjEwNmM0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NyxcbiAgICAgIDE1NCxcbiAgICAgIDk1LFxuICAgICAgMTIxLFxuICAgICAgMjUxLFxuICAgICAgOTgsXG4gICAgICAxMDEsXG4gICAgICAxNzksXG4gICAgICAyMDIsXG4gICAgICAxMDUsXG4gICAgICAxMjMsXG4gICAgICAxMzgsXG4gICAgICAxNDMsXG4gICAgICAxMzcsXG4gICAgICA1NSxcbiAgICAgIDY3LFxuICAgICAgMjM1LFxuICAgICAgMTc5LFxuICAgICAgNTksXG4gICAgICAxNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUsXG4gICAgICA2NSxcbiAgICAgIDI0NSxcbiAgICAgIDE0NyxcbiAgICAgIDE3NixcbiAgICAgIDk3LFxuICAgICAgMTUwLFxuICAgICAgMTYwLFxuICAgICAgMTU1LFxuICAgICAgMjMwLFxuICAgICAgMTYsXG4gICAgICAyMzMsXG4gICAgICAxLFxuICAgICAgOTgsXG4gICAgICA5MyxcbiAgICAgIDYzLFxuICAgICAgMTY3LFxuICAgICAgMjI2LFxuICAgICAgMTczLFxuICAgICAgMTg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIloyUzlFUEhXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTgyMTk3NjkxODM6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3ODAwNDkxOTYxOTgyOToyOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKYnUwSVlERUlERHBiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInc1blZMMkV2STFyYTIzckNiTHJEa1M0ZWJ5M0Q0WjMwUHVuRkhKKzBxSEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRkppazE5QitYR2syVXRNekV6SFYrUVNsMndaVVZjMXpGWnpUREwrcUV1dnZOZ3J5eUFvSUhsZncwdEZCMGxiYjEwUHBuemhPL0FwMXMvSk43V3J1QXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV0FacHhEUitpaVA0cFJDK3BPNFRBUzFBMXptWENIVXNaRW5UZ2w3K2VOanQva0J6SXZQdm9hS05yNVhKQWRoT2svNFRaYkNidXhGbkJvMEJQU09PalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4MjE5NzY5MTgzOjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyNzk0MjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHODhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUc4OC5qc29uIjogIntcImtleURhdGFcIjpcIllWTE1Pa29Ud0JFb05hSUdxWU1oN29UQkp1eWQwUjR2Q0R1MUxYZUJYaDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODE5MjE0MTAyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyNzk0MzIyNTNcIn0iCn0=


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
