const fs = require('fs');
const TelegramBot = require('node-telegram-bot-api');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Define your bot token directly within the script
const botToken = 'YOUR_BOT_TOKEN';

// Initialize the bot with your bot token
const bot = new TelegramBot(botToken, { polling: true });

// Object to store submitted data for each user
const userSubmittedData = {};

// Define the CSV writer for a single file
const csvWriter = createCsvWriter({
  path: 'all_user_data.csv',
  header: [
    { id: 'user', title: 'User' },
    { id: 'data', title: 'Data' }
  ],
  append: true // Append to the file if it exists
});

// Start command
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Hi! Send me data');
});

// Message handler
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const userName = msg.from.username || userId.toString(); // Use user ID if username is not available
  const userData = msg.text;

  // Prevent saving the /start command message
  if (userData === '/start') return;

  // Check if the user has already submitted the same data
  if (userSubmittedData[userId] && userSubmittedData[userId].includes(userData)) {
    bot.sendMessage(chatId, 'You have already submitted the data.');
    return;
  }

  // Save data to the single CSV file
  csvWriter.writeRecords([{ user: userName, data: userData }])
    .then(() => {
      bot.sendMessage(chatId, 'Data received success!');
      // Update user's submitted data
      if (!userSubmittedData[userId]) {
        userSubmittedData[userId] = [];
      }
      userSubmittedData[userId].push(userData);
    })
    .catch((err) => {
      console.error('Error writing to CSV', err);
      bot.sendMessage(chatId, 'There was an error saving your data. Try again');
    });
});