const { CommandInteraction, Client } = require("discord.js");

module.exports = {
  name: "primary",
  /**
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */

  run: async (client, interaction) => {
    interaction.reply({ content: "le bouton fonctionne." });
  },
};
