const { groupBy, select } = require("../db/connection");
const knex = require("../db/connection");


//get /movies

function list(isShowing) {
    return knex('movies as m')
      .select('m.*')
      .modify((queryBuilder) => {
        if (isShowing) {
          queryBuilder
            .join('movies_theaters as mt', 'm.movie_id', 'mt.movie_id')
            .where({ 'mt.is_showing': true })
            .groupBy('m.movie_id');
        }
      });
  }

  function read(movieId) {
      return knex(`movies`)
      .select("*")
      .where({"movie_id" : movieId})
  }

module.exports = { list, read };
