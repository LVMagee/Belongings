// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/belongings");
    }
    res.sendFile(path.join(__dirname + "/../views/index.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/belongings");
    }
    res.sendFile(path.join(__dirname + "/../views/login.html"));
  });

   app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/belongings");
    }
    res.sendFile(path.join(__dirname + "/../views/signup.html"));
  });

   app.get("/about", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/belongings");
    }
    res.sendFile(path.join(__dirname + "/../views/about.html"));
  });

  app.get("/contactus", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/belongings");
    }
    res.sendFile(path.join(__dirname + "/../views/contactus.html"));
  }); 

   app.get("/team", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/belongings");
    }
    res.sendFile(path.join(__dirname + "/../views/team.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/belongings", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname + "/../views/belongings.html"));
  });

};
