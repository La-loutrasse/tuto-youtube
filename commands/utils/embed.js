const {
  CommandInteraction,
  Client,
  EmbedBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  SelectMenuBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  name: "embed",
  description: "Permet de renvoyer un embed.",

  /**
   * @param {CommandInteraction} interaction
   * @param {Client} client
  */

  run: async (client, interaction) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("primary")
        .setLabel("Click me!")
        .setStyle(ButtonStyle.Success),
    );

    const select = new ActionRowBuilder().addComponents(
      new SelectMenuBuilder()
        .setCustomId("select")
        .setPlaceholder("Nothing selected")
        .addOptions(
          {
            label: "Select me",
            description: "This is a description",
            value: "first_option",
          },
          {
            label: "You can select me too",
            description: "This is also a description",
            value: "second_option",
          },
        ),
    );

    const exampleEmbed = new EmbedBuilder()
      .setColor("Aqua")
      .setTitle("Some title")
      .setAuthor({
        name: "Some name",
      })
      .setDescription("Some description here")
      .addFields([
        { name: "Regular field title", value: "Some value here" },
        { name: "\u200B", value: "\u200B" },
        { name: "Inline field title", value: "Some value here", inline: true },
        { name: "Inline field title", value: "Some value here", inline: true },
      ])
      .addFields([
        { name: "Inline field title", value: "Some value here", inline: true },
      ])
      .setTimestamp()
      .setFooter({ text: "Some footer text here" });

    interaction.reply({ embeds: [exampleEmbed], components: [row, select] });
  },
};
