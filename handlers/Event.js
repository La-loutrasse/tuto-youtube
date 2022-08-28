const fs = require("fs");

module.exports = (client) => {
  fs.readdirSync("./events/")
    .filter((file) => file.endsWith(".js"))
    .forEach((event) => {
      require(`../events/${event}`);

      console.log(event.split(".js")[0]);
    });
};
