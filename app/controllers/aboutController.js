exports.controller = function(actions){
  actions.get("/about", function(actionHelper){
    console.log("about the project - worked");
  });
};
