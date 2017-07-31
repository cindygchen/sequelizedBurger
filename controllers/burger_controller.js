var express = require("express");

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		res.render("index", {burgers: data});
	});
});

router.post("/", function(req, res) {
	console.log("req.body.name: " + req.body.name);
	burger.insertOne("burger_name", [req.body.name], function() {
		res.redirect("/");
	});
});

router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;
;	console.log("condition: " + condition);
	burger.updateOne({devoured: req.body.devoured}, condition, function() {
		res.redirect("/");
	});
})

module.exports = router;
