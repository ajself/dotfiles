
module.exports = {

  name: "Clean Javascript",

  directory: false,

  params: ["name"],

  rules: function(config) {
    return({
      items: [
        { destinationFile: "ViewController.js", sourceTemplateFile: "ViewController.template" },
        { destinationFile: "Interactor.js", sourceTemplateFile: "Interactor.template" },
        { destinationFile: "Models.js", sourceTemplateFile: "Models.template" },
        { destinationFile: "Presenter.js", sourceTemplateFile: "Presenter.template" },
        { destinationFile: "Worker.js", sourceTemplateFile: "Worker.template" }
      ]
    });
  }
}
