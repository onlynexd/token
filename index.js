const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot8 = new Eris(process.env.token8);
const bot9 = new Eris(process.env.token9);
const bot10 = new Eris(process.env.token10);
const bot11 = new Eris(process.env.token11);
const bot12 = new Eris(process.env.token12);
const bot13 = new Eris(process.env.token13);
const bot14 = new Eris(process.env.token14);
const bot15 = new Eris(process.env.token15);
const bot16 = new Eris(process.env.token16);

bot8.on("error", (err) => {
  console.error(err); // or your preferred logger
});
bot9.on("error", (err) => {
  console.error(err); // or your preferred logger
});
bot10.on("error", (err) => {
  console.error(err); // or your preferred logger
});
bot11.on("error", (err) => {
  console.error(err); // or your preferred logger
});
bot12.on("error", (err) => {
  console.error(err); // or your preferred logger
});
bot13.on("error", (err) => {
  console.error(err); // or your preferred logger
});
bot14.on("error", (err) => {
  console.error(err); // or your preferred logger
});
bot15.on("error", (err) => {
  console.error(err); // or your preferred logger
});
bot16.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot8.connect(); // Get the bot to connect to Discord
bot9.connect(); // Get the bot to connect to Discord
bot10.connect(); // Get the bot to connect to Discord
bot11.connect(); // Get the bot to connect to Discord
bot12.connect(); // Get the bot to connect to Discord
bot13.connect(); // Get the bot to connect to Discord
bot14.connect(); // Get the bot to connect to Discord
bot15.connect(); // Get the bot to connect to Discord
bot16.connect(); // Get the bot to connect to Discord
