const { CommandInteraction, Client } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Permet de renvoyer la latence du bot.",

  /**
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */

  run: async (client, interaction) => {
    interaction.reply({
      content: `Mon ping est de ${client.ws.ping}ms`,
      ephemeral: false,
    });
  },
};
