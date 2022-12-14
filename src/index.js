const telegramBot = require("node-telegram-bot-api");
const ethers = require("ethers");
require("dotenv").config();
// const TOKEN = process.env.TOKEN;
const TOKEN = "5984423084:AAFauO8Yd-x2w1qTb_9d9UU0XtWLM64DZM8";
const abi = require("../constants/ABI.json");
const contractAddress = 0xd178AceC8b810319C57f3F4443858294cA8C44b7;
//bot created
const botUpdated = new telegramBot(TOKEN, { polling: true });

botUpdated.on("message", (message) => {
  console.log(message);
  let chat_id = message.from.id;
  console.log(chat_id);
  botUpdated.sendMessage(
    chat_id,
    message.text == "/36"
      ? "i am bot"
      : "1000 PCNT staked on Unifarm on ETH chain by 0xsssss"
  );
});

// const mess = () =>{
//     const message = "hi"
//     botUpdated.sendMessage(-897807558,message)
// }
// mess()
// -1001301537135 - UnifarmOfficial
// -1001790463441 - Gjffdu
function sendMessageOnTelegram(chatID, message) {
  bot.sendMessage(chatID, `Received your message ${chatID} :: ${message}`);
}

async function main() {
  const JsonRpcProvider = new ethers.providers.JsonRpcProvider(
    `https://rpc.ankr.com/polygon`
  );
  const contract = new ethers.Contract(contractAddress, abi, JsonRpcProvider);
  contract.on(
    "NewNotification",
    (appId, walletAddress, message, buttonName, cta, isEncrypted) => {
      console.log(appId, walletAddress, message, buttonName, cta, isEncrypted);
    }
  );
}
main()
