const {
  CommandInteraction,
  Client,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  name: "kick",
  description: "Permet de kick un utilisateur du serveur.",
  options: [
    {
      name: "member",
      description: "Le membre à expulser.",
      type: 6, //USER
      required: true,
    },
    {
      name: "raison",
      description: "La raison du kick.",
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
    const reason =
      interaction.options.getString("raison") ||
      "La raison n'a pas été spécifié.";

    if (!member)
      return interaction.reply({
        content: "Le membre n'est plus sur le serveur.",
        ephemeral: true,
      });

    if (!interaction.guild.members.cache.get(member.id).kickable)
      return interaction.reply({
        content: "Le membre ne peut pas être kick par le bot.",
        ephemeral: true,
      });

    const embed = new EmbedBuilder()
      .setTitle("Kick")
      .setColor("Orange")
      .setDescription(
        `**Membre**: ${member.username}\n**Par**: ${interaction.user.tag}\n**Raison**: ${reason}`,
      )
      .setThumbnail(member.displayAvatarURL());

    interaction.reply({ embeds: [embed] }).then(async () => {
      interaction.guild.members.cache
        .get(member.id)
        .kick({ reason: `${reason} (kick par ${interaction.user.tag})` });
    });
  },
};
