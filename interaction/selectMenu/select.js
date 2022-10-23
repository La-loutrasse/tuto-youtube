const { CommandInteraction, Client } = require("discord.js");

module.exports = {
  name: "select",
  /**
   * @param {CommandInteraction} interaction
   * @param {Client} client
  */

  run: async (client, interaction) => {
    if (interaction.values[0] === "first_option") {
      interaction.reply({ content: "première option" });
    } else if (interaction.valueOf("second_option")) {
      interaction.reply({ content: "seconde option" });
    }
  },
};
