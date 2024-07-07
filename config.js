//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fee7af11b4edf8eb7c272.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "918617340627";
global.owner = process.env.OWNER_NUMBER || "918617340627";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUROY204bUcrcHlYaCs1RnpJQWQvSXNIWVJNWG0rY245TzNlTWNWbGpWaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidk5nOFE5bmJHOE01VFpML293Y25ZRkk3UzZzRkVKdE9NS3c0WEJjY3JqOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTFZIOU9tRFdBNEtTZ28vQTJiNi9oZ2sya0tWQWJrVjhpSE1zU0gvbldJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4M2taOTNRL0I0bFIycWpEUHBCMXgxSGFMencwRU9yNEs2KzI0Y2xCTTNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldDSDdtaFZUNHI0NFNWL1ZPdjlzbDA2bUJ1dHdRWFc0QTB2MFJaUGpYMkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFkb1FNaEwvUVVKbENHQzVxMmxUQnhSUVpLd3pNZDREcmZHYUZrazdMeFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVBaeDhvdzJpMjBkUkh6STBMVXIrc2JSL1JYcWx3V0J6L1BvSTBhOW5uOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVhGcndEYnRUY3BmSlJWOC9PaDNCbWJubGwrVWpBVkJOMXhPSkJvSzhuND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjgvTkdYK3M0STE5dHZCR2pIa3FvNmd3QzUrUEN3WXRQa0JVVUZPM1ZhR3hvWGxZRkpmcmMwSGFWSFhCenNqNkZkVUNCUGplVEttODJwUU96YnVnNmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzUsImFkdlNlY3JldEtleSI6InZmeW9XdVZZc3ZWNjcrY1N0V2RZdUZ2UVoxVmYwS2VZMENybnZTL24yNzQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IldHNVRNN0MzVC0yVkZjcEFBcUx5alEiLCJwaG9uZUlkIjoiZmQxZjJjN2UtYmI3Yi00ZmE2LTlhY2EtNzZjOTk4YmQ1ZmQwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxWUHB0UGJHaHZkaHR5bEVhSVcvaW9Kais3WT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMdFFNT1ZiNU1CRWxaSjVxazhqSEVBNmRzN3c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOUVUU0JKNkEiLCJtZSI6eyJpZCI6IjkxODYxNzM0MDYyNzoyOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLqp4HgvJLCtkHCtiDCtm7CtiDCtiHCtiDCtkvCtiDCtsK2IF4gwqvCuyB+IC7gvJLqp4IifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ptSHdhNEVFTnVFcWJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IktaSy9LOTFqU3FSU1pKb1JOamY4d09CUkEzZ0hqdHV4eGxkR0Z6S1N4bkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjI5Y0s1NlRMaTlXNHEvZVFTSGVTZlhkbUJkdE1TdHNRM29SMm96OWljQ05RWC9VcXV1REFHaGQ4K1k4SVMyNGhNV1NwN1pLNVcyMTFFeU15VVRZK0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmMXB6aDVDZjgyZ1NRT2FsYVFQUUpDMURVT25wWW9xTjFBZ0trdTZRRFJDNWJRRTRqTzJXVXNQbVF5TXk3aHRpTGlJNXpldWJxcVVtZUhPeEtOL2Rqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxODYxNzM0MDYyNzoyOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTbVN2eXZkWTBxa1VtU2FFVFkzL01EZ1VRTjRCNDdic2NaWFJoY3lrc1p5In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMzM3MDAwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFYdCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "꧁༒☬☠An!k☠︎☬༒꧂",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
