const fs = require("fs");

module.exports = (client) => {
  fs.readdirSync("./interaction/").forEach(() => {
    const files = fs
      .readdirSync("./interaction/button/")
      .filter((f) => f.endsWith(".js"));

    files.forEach((file) => {
      const button = require(`../interaction/button/${file}`);
      if (button) {
        client.buttons.set(button.name, button);
      }
    });
  });
};
