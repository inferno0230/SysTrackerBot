require('dotenv').config();

const TelegramToken = process.env.TOKEN;
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(TelegramToken);
const chatId =  process.env.ID;
const network = require('network');

// Get the current time
const currentTime = new Date();

// Get the IP address of the host
var ipaddr = null;
network.get_public_ip((err, ip) => {
  if (err) {
    console.error('Error:', err);
  } else {
    ipaddr = ip;
    bot.sendMessage(chatId, 'Server is up and running\n' + currentTime + ' with IP address of ' + ipaddr);
  }
});
