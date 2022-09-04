const fs = require("fs");

module.exports = (client) => {
  fs.readdirSync("./interaction/").forEach(() => {
    const files = fs
      .readdirSync("./interaction/selectMenu/")
      .filter((f) => f.endsWith(".js"));

    files.forEach((file) => {
      const select = require(`../interaction/selectMenu/${file}`);
      if (select) {
        client.selects.set(select.name, select);
      }
    });
  });
};