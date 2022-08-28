const { InteractionType } = require("discord.js");
const client = require("../main");

client.on("interactionCreate", (interaction) => {
  if (interaction.type === InteractionType.ApplicationCommand) {
    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    command.run(client, interaction);
  }
});
