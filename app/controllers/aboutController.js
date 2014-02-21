exports.controller = function(actions){
  this.about = actions.get("/about", function(actionHelper){
    console.log("about the project - worked");
  });
};
