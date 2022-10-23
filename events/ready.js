const client = require("../main");

client.on("ready", async () => {
  console.log(`${client.user.tag} est connecté à discord.`);

  await client.application.commands.set(client.commands.map((cmd) => cmd));

});
