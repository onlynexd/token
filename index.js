const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);
const bot1 = new Eris(process.env.token2);
const bot2 = new Eris(process.env.token3);
const bot3 = new Eris(process.env.token4);
const bot4 = new Eris(process.env.token5);
const bot5 = new Eris(process.env.token6);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});
bot1.on("error", (err) => {
  console.error(err); // or your preferred logger
});
bot2.on("error", (err) => {
  console.error(err); // or your preferred logger
});
bot3.on("error", (err) => {
  console.error(err); // or your preferred logger
});
bot4.on("error", (err) => {
  console.error(err); // or your preferred logger
});
bot5.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord
bot1.connect(); // Get the bot to connect to Discord
bot2.connect(); // Get the bot to connect to Discord
bot3.connect(); // Get the bot to connect to Discord
bot4.connect(); // Get the bot to connect to Discord
bot5.connect(); // Get the bot to connect to Discord
