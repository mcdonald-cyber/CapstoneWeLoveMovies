const knex = require("../db/connection");


//get /movies

function list() {
  return knex("movies").select("*");
}


// // GET /Movies?is_showing=true

// function  {
//     return
//     knex("movies as m")
//     .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
//     .select("*")
//     .where({"mt.is_showing": true })
//     .then(moot => {
//         res.json({ data : moot });
//     });
// });


module.exports = { list };
