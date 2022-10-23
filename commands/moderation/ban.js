const { CommandInteraction, Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ban",
  description: "Permet de ban un utilisateur du serveur.",
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

    if (!interaction.guild.members.cache.get(member.id).bannable)
      return interaction.reply({
        content: "Le membre ne peut pas être ban par le bot.",
        ephemeral: true,
      });

    const embed = new EmbedBuilder()
      .setTitle("Ban")
      .setColor("Red")
      .setDescription(
        `**Membre**: ${member.username}\n**Par**: ${interaction.user.tag}\n**Raison**: ${reason}`,
      )
      .setThumbnail(member.displayAvatarURL());

    interaction.reply({ embeds: [embed] }).then(async () => {
      interaction.guild.members.cache
        .get(member.id)
        .ban({ reason: `${reason} (ban par ${interaction.user.tag})` });
    });
  },
};
