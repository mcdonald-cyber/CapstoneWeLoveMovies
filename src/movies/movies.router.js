const router = require("express").Router({mergeParams : true});
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const { Router } = require("express");

router
    .route("/")
    .get(controller.list)
    .all(methodNotAllowed);

// `GET /movies/:movieId`

Router
    .route("/movies/:movieId")
    .get(controller.read)
    .all(methodNotAllowed);


module.exports = router;