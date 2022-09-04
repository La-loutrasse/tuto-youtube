const { CommandInteraction, Client } = require("discord.js");

module.exports = {
  name: "select",
  /**
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */

  run: async (client, interaction) => {
    if (interaction.valueOf("first_option")) {
      interaction.reply({ content: "première option" });
    } else if (interaction.valueOf("secon_option")) {
      interaction.reply({ content: "test" });
    }
  },
};
