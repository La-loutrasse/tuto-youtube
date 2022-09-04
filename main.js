//donc ici les intents sont obligatoire pour notre bot suivant les événements que vous utiliserez vous devrez les importer
const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
  ],
  partials: [
    Partials.Channel,
    Partials.User,
    Partials.Reaction,
    Partials.Message,
    Partials.GuildMember,
    Partials.GuildScheduledEvent,
    Partials.ThreadMember,
  ],
});

client.commands = new Collection();
client.buttons = new Collection();
client.selects = new Collection();
module.exports = client;

["Command", "Event", "Button", "SelectMenu"].forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});

require("dotenv").config();
//permet de mettre en ligne notre robot
client.login(process.env.TOKEN);
