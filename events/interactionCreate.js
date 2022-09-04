const { InteractionType } = require("discord.js");
const client = require("../main");

client.on("interactionCreate", (interaction) => {
  if (interaction.type === InteractionType.ApplicationCommand) {
    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    command.run(client, interaction);
  } else if (interaction.isButton()) {
    const button = client.buttons.get(interaction.customId);
    if (!button) return;
    else {
      button.run(client, interaction);
    }
  } else if (interaction.isSelectMenu()) {
    const selects = client.selects.get(interaction.customId);
    if (!selects) return;
    else {
      selects.run(client, interaction);
    }
  }
});
