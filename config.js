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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUpEK0xUQmRtN1NWQTBRUlVVRU55eFlWMUZVKzE2SG5pQUtqUUU5U2NIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQW4zcThxN3ZPNzNENjFPRS9MOGtkcFNWclZ0VklFTW81K3o4SEgzWWVsST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QkVrdDdQS2RsYUJJV0p3UU5xVUUwNWxYRjNYYkllSEVvbUZWTWFaY21nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwNHZpRm5Ec1JDNWJGblJmTEdhRXJVWkRkNEpXdVkzNldiZ3dDbnNRYTBJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitCUEc4bDVzUGx6MmFPZnRzWGlnVXZoUXQ3ZkVqazRrQ09ZVC9oNGt0Mm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImY1VWFDdzJYdkpaZnZOdGN2YXFqSXJaa29yWDNYd20xNWc3elQ5U2tXV1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU9zL0FoKzg3NWtIeVlnMU11R3pGR3B6cEo4QytpWkozZWRuYlJLdTVWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWhmYzFHT1lwUDhaL1UzR2dyOEN6a0lSWHlNSjZuaEZNT0F4YW9IKzNHRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFQdXFNVEVEZ1c5STRpdjJ1TUFmYWxRcFBYRy9lNmM5K1UySXVVOWdzRnV0ZjJIeXM2Vjloc01BN3hiV2IrRHJEbnZlRldOb2tYcjEydjcwWnR1eEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzUsImFkdlNlY3JldEtleSI6IkN6amdudnhiZkU3K09yVGh5S0dnWnUxZ1BoTnVKSUJ1VkR4TUVJRFdxRk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Imc0aGZyanAxVFBLT1Bld1NkOU9DUEEiLCJwaG9uZUlkIjoiMWVhMGNiNDQtZWMxZS00OWQxLWE1MTMtNjMyZTRmNjYwNjVhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5kSWFjWGhJK1VybWJxU1R1dEVMOHlNQ0NGOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5d2lSaGdZS2xpV3hMZy96VkRIQWo0MytiSnc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNTczOTNOUUIiLCJtZSI6eyJpZCI6IjkxODYxNzM0MDYyNzoyNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLqp4HgvJLCtkHCtiDCtm7CtiDCtiHCtiDCtkvCtiDCtsK2IF4gwqvCuyB+IC7gvJLqp4IifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pXSHdhNEVFUHY1b0xRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IktaSy9LOTFqU3FSU1pKb1JOamY4d09CUkEzZ0hqdHV4eGxkR0Z6S1N4bkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjlTY1E2QlNINTdrc28yNW1Td3BNU2RhR28vdEFvcVI1STJZUVN2cGp4KytMalcweXJDU1JTalVWZE9KZDZZNEZka2xuQUpLVk5tUUhHVS9uK1Y5TENnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxOXhqdkVaeEViRzV6MFBpNnJXZ3RRSXNKZlkwQVZqNTJMOWRFNGtrTHpTL1NHYXNvK1FYem41MDUrbHROdzhSeU1WeXJ0R2dEQlFDay9FaTVYMFdDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxODYxNzM0MDYyNzoyNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTbVN2eXZkWTBxa1VtU2FFVFkzL01EZ1VRTjRCNDdic2NaWFJoY3lrc1p5In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMjA0NTUyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZYTSJ9"
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
