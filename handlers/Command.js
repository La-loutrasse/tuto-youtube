const fs = require("fs");

module.exports = (client) => {
  fs.readdirSync("./commands/").forEach((dir) => {
    const files = fs
      .readdirSync(`./commands/${dir}/`)
      .filter((file) => file.endsWith(".js"));

    if (!files || files.length <= 0) console.log("Commande - 0");

    files.forEach((file) => {
      const command = require(`../commands/${dir}/${file}`);
      if (command) {
        client.commands.set(command.name, command);
        console.log(command.name);
      }
    });
  });
};
