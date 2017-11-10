module.exports = {

  name: "Clean JS View",

  directory: false,

  params: ["name"],

  rules: function(config) {
    return({
      items: [
        { destinationFile: "View.js", sourceTemplateFile: "View.template" }
      ]
    });
  }
}
