require('dotenv').config();


// Helper function to convert "true"/"false" strings to real booleans
const toBool = (value) => value === "true";

// Owner & Bot Details
global.owner = process.env.OWNER_NUMBER;
global.anitav4 = process.env.BOT_NAME || "𝐐𝐔𝐄𝐄𝐍_SUSHMITA-𝐕𝟒";
global.ownername = process.env.OWNER_NAME || "AVI SUSHMITA";
global.packname = process.env.PACK_NAME || "𝐐𝐔𝐄𝐄𝐍_SUSHMITA-𝐕𝟒";
global.author = process.env.AUTHOR || "AVIRUP";
global.channelname = process.env.CHANNEL_NAME || "AVI SUSHMITA";
global.channeljid = process.env.CHANNEL_JID || "919331218857@newsletter";
global.session = process.env.SESSION || "{"noiseKey":{"private":{"type":"Buffer","data":"CEqh/LrJKMR5sDCa+SqSfwvA1VubBztnGoOAGYubUlQ="},"public":{"type":"Buffer","data":"B60BWcwdsweYF6geHxicVoKnzM8ydW5kf7Ng/h3BH2w="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"2MEk/cCe/eBBDCKcKHbS0c/nuP0twb1S8VcP1/8dW0U="},"public":{"type":"Buffer","data":"CRF7WqDH+2i5bq7zF6NMAsNjACkJBqq53wzrp9hxlhQ="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"gPZgiIffHY95AAohQ7G0U16j5aO0QABdGkglAZ5JHHA="},"public":{"type":"Buffer","data":"1AbkyKSRxlh1QoaDfrTqxN1ZFSHqSbOpqnOK9YzgW2A="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"KIn6xnzECZEc/8MDcw+sX0nOwy7yUHC8QHmtQFPeOl8="},"public":{"type":"Buffer","data":"Vy9nuWvdM1dQGIy33Lv+8VIsFHudIo8ZdXM058hUhBo="}},"signature":{"type":"Buffer","data":"0imbZz7vnaOpW1imHm90nncTBsHyaDbzlFKhPPTTU4k8aEGanGjnLBZo02Bv3hGhmqDoKR8ClujXhsTt8wCTjg=="},"keyId":1},"registrationId":200,"advSecretKey":"piQrqaUyMcIt0wMZvnNaEVK2ML3gvUaWKysKKDdPKLE=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"PE1319eoQeiweEfGOt9MlA","phoneId":"b824a01c-0d10-45e1-96e0-0770ba878118","identityId":{"type":"Buffer","data":"ZLrXfHZli1jawI8WvgMF1BFNCwQ="},"registered":false,"backupToken":{"type":"Buffer","data":"RNg2Mfv1lDcv9nbN/9HWC46WjwE="},"registration":{},"account":{"details":"CPi4t8YHENmF4cEGGAIgACgA","accountSignatureKey":"Xoh/mn0wWHsE1+gWY+iNDpOlejyghvZc0++av26FkRc=","accountSignature":"pW0o4qzakyE3GBiIYZjlJmj6hLyZgX19lHfLhrsvJ9hHAUxXchoCSXwqZiMvtJmCtJVnc7wWfTER/LonpFbGDw==","deviceSignature":"kjEWByFYe5smQc2fXkQ9ktEa/bykh5zTT26U09jqjZHhtfumbbUEiTR4rEgYMIogoHteFpZ4oSD9ff/25jJMgQ=="},"me":{"id":"919331218857:63@s.whatsapp.net"},"signalIdentities":[{"identifier":{"name":"919331218857:63@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BV6If5p9MFh7BNfoFmPojQ6TpXo8oIb2XNPvmr9uhZEX"}}],"platform":"android","lastAccountSyncTimestamp":1748517606}"

// Auto-Features
global.autoTyping = toBool(process.env.AUTO_TYPING);
global.autoRecord = toBool(process.env.AUTO_RECORD);
global.autoViewStatus = toBool(process.env.AUTO_VIEW_STATUS);
global.AUTO_STATUS_REACT = toBool(process.env.AUTO_STATUS_REACT);
global.autoLikeEmoji = process.env.AUTO_LIKE_EMOJI || "💚";
global.LEVELUP = toBool(process.env.LEVELUP);
global.ANTIVIEWONCE = toBool(process.env.ANTIVIEWONCE);

global.public = process.env.PUBLIC === 'false';
// Group & Security Settings

global.ANTIDELETE = toBool(process.env.ANTIDELETE);
global.unavailable = toBool(process.env.UNAVAILABLE);
global.available = toBool(process.env.AVAILABLE);
global.autoreadmessages = toBool(process.env.AUTO_READ_MESSAGES);
global.chatbot = toBool(process.env.CHATBOT);
global.autoreact = toBool(process.env.AUTO_REACT);
global.WELCOME = toBool(process.env.WELCOME);

// Prefix & Other Settings
global.prefix = process.env.PREFIX || '.';
global.autobio = toBool(process.env.AUTO_BIO);
global.ANTI_TEMU = toBool(process.env.ANTI_TEMU);
global.ANTI_TAG = toBool(process.env.ANTI_TAG);
global.ANTICALL = toBool(process.env.ANTICALL);
global.antilink = toBool(process.env.ANTILINK);
global.antilinkkick = toBool(process.env.ANTILINK_KICK);
global.antilinkwarn = toBool(process.env.ANTILINK_WARN);

// Messages
global.mess = {
    success: process.env.MESSAGE_SUCCESS || '𝙳𝚘𝚗𝚎',
    admin: process.env.MESSAGE_ADMIN || '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: process.env.MESSAGE_BOT_ADMIN || '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: process.env.MESSAGE_OWNER || '_*❗This Command Can Only Be Used By My Owner !*_',
    OnlyGrup: process.env.MESSAGE_GROUP || '_*❗This Command Can Only Be Used In Group Chat !*_',
    private: process.env.MESSAGE_PRIVATE || '_*❗This Command Can Only Be Used In Private Chat !*_',
    wait: process.env.MESSAGE_WAIT || '_*Please Wait*_',
    notregist: process.env.MESSAGE_NOT_REGIST || '_*You are not registered in the Bot Database. Please register first*_',
    premium: process.env.MESSAGE_PREMIUM || '_*Premium only" Want Premium? Chat Owner*_',
    endLimit: process.env.MESSAGE_END_LIMIT || '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
};


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
