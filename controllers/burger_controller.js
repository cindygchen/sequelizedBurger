// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");

// Import the model to use its database functions.
var db = require("../models");
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
	db.Burgers.findAll({}).then(function(arg) {
		res.render("index", {burgers: arg});
	});
});

router.post("/", function(req, res) {
	db.Burgers.create({
		burger_name: req.body.name,
		devoured:req.body.devoured
	}).then(function(arg){
		res.redirect("/");
	});
});

router.put("/:id", function(req, res) {
	db.Burgers.update(
		{
			devoured: true
		}, 
		{ where: {
			id: req.params.id
		}
	}).then(function(arg){
		res.redirect("/");
	});
});


module.exports = router;