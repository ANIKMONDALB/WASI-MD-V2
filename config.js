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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0JIYVRJZDYxcTdTVlJvY1RnaDBZbWluYnJvQmNHS0VVUGpybk03WVExND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiamh4WU9DMlNwNUF6QkpXR1hncEsvTEhnTlNUd2wvejV3dkRFaW5LV1p3QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRk0wZ3Z2aGhVVElkdzIrRU52cGI5UW5RdFVkQjhabk9Mc1EzRHlCaFVrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZeG9GOWRRVXV6QjA0SDk4dnN1QkNGUUlxWVhQZHh4Ri9aRWVaUUpZUjBRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVQTkxEdktjSlYvZzNDOG1CcmMvSjkzazRPWXp0NVdPTmhINVdhKzlDVUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitKOGQzMTRleVpQQTdHKzhFekVsdmk1NmVhV3pWK2VuK3dzN2RPY25PQUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0xwUnpUYVFsTXoreWtsQ09DY1dOSDFqdnNsOE9qR1AvM0pBRzhKbjEwWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkRXUGt4NjM4cWZUelYyMzBCTXJzd2RrVVJKajB1WThnM0NDT01aVU5Gdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9lSkxFcmVTM3N5d3VWNDI4K1ZDSlVId3Y3YVJmaTBnajd5WXk4UTQvQU9aK1QyclBVVVdkMmI1UWFyQys0ai9sSTJibDJObHpad1ErQ3A3M094WURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQxLCJhZHZTZWNyZXRLZXkiOiJ1OTBtSThFQW1CZmxUNlFlenpaK1l2dWt6TjhJZW9adExiZmUvSHNYSW9JPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJYcVpMT1RjQVRMZVhWLVN4Zk5rT1VRIiwicGhvbmVJZCI6IjdlYmM5NTA0LWY4NTMtNDAwOC1hYzJiLTA3NjViNTcwZjBjOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzU2R1K2wrb0k3NTBIZzdKdHArTFU4N1A5TXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2I1VHQ5NEF6STlodnRVT1E2blNXSXB0enM0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNMNFJNRU40IiwibWUiOnsiaWQiOiI5MTg2MTczNDA2Mjc6MzdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi6qeB4LySwrZBwrYgwrZuwrYgwrYhwrYgwrZLwrYgwrbCtiBeIMKrwrsgfiAu4LyS6qeCIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKeUh3YTRFRVBhSnVMUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJLWksvSzkxalNxUlNaSm9STmpmOHdPQlJBM2dIanR1eHhsZEdGektTeG5JPSIsImFjY291bnRTaWduYXR1cmUiOiJSR1JNTjhZbXJJMTQ5NVJFem00NlBHQzZjcFNsa0V0WitGM2VpbzR6MFMxWEJyTGxRWXRUQnYwYkdqOExQcHRiSS9KV2xVbW10VzRzdWxWSk4wK2pDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiazNHUVVhQXQwUnd0akR3V2hna0ZEUFl6OW8vc3RYby9mdHc1d1lFM3JxYkMyRlA4VGp1UW03RnNIMzZidDNEZEtRWmNJcWFML0pYU3ZkRnlzNW1ZQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTg2MTczNDA2Mjc6MzdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU21Tdnl2ZFkwcWtVbVNhRVRZMy9NRGdVUU40QjQ3YnNjWlhSaGN5a3NaeSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDU4MzQyOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQTTkifQ=="
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
