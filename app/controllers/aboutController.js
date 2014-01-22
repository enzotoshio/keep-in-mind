exports.controller = function(actions){
  actions.get({path:"/about"}, "about", function(actionHelper){
    console.log("about the project - worked");
  });
};
