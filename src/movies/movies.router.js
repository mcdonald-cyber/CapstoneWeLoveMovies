const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

console.log("+++++++++++++++++++ controller", controller.list)

router
    .route("/")
    .get((req, res) => {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>> SOMETHING HERE!!")
    })
    .all(methodNotAllowed);

// router
//     .route("/movies?is_showing=true")
//     .get(controller.list)
//     .all(methodNotAllowed);

module.exports = router;