const { Plugin } = require("@saltcorn/data/models/plugin");

module.exports = new Plugin({
  name: "my_saltcorn_plugin",
  description: "Testowy plugin do Saltcorn",
  actions: {
    hello_action: async () => {
      return "Hello from Saltcorn Plugin!";
    },
  },
});
