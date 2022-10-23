const { CommandInteraction, Client, EmbedBuilder } = require("discord.js");
const ms = require("ms");

module.exports = {
  name: "mute",
  description: "Permet de mute un utilisateur du serveur.",
  options: [
    {
      name: "member",
      description: "Le membre à mute.",
      type: 6, //USER
      required: true,
    },
    {
      name: "duration",
      description: "La durée du mute.",
      type: 3, //STRING
      required: true,
    },
    {
      name: "raison",
      description: "La raison du mute.",
      type: 3, //STRING
      required: false,
    },
  ],

  /**
   * @param {CommandInteraction} interaction
   * @param {Client} client
   */

  run: async (client, interaction) => {
    const member = interaction.options.getUser("member");
    const duration = interaction.options.getString("duration");
    const reason =
      interaction.options.getString("raison") ||
      "La raison n'a pas été spécifié.";
    const converTime = ms(duration);

    if (!member)
      return interaction.reply({
        content: "Le membre n'est plus sur le serveur.",
        ephemeral: true,
      });

    if (!converTime)
      return interaction.reply({
        content: "La durée n'est pas correcte.",
        ephemeral: true,
      });

    if (!interaction.guild.members.cache.get(member.id).moderatable)
      return interaction.reply({
        content: "Le membre ne peut pas être mute par le bot.",
        ephemeral: true,
      });

    const embed = new EmbedBuilder()
      .setTitle("Mute")
      .setColor("Orange")
      .setDescription(
        `**Membre**: ${member.username}\n**Par**: ${interaction.user.tag}\n**Raison**: ${reason}\n**Temps**: ${duration}`,
      )
      .setThumbnail(member.displayAvatarURL())
      .setTimestamp();

    interaction.reply({ embeds: [embed] }).then(async () => {
      interaction.guild.members.cache
        .get(member.id)
        .timeout(converTime, reason);
    });
  },
};
