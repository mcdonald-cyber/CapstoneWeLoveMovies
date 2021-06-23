const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");


async function list(req, res, next) {
   const data = await service.list(req.query.is_showing);
  res.json({ data });
}

async function movieExist (req, res, next) {
  const { movieId } = req.params
  const setMovieId = Number(movieId);
  const data = await service.read(setMovieId);
  if (data) {
    res.locals.movie = data;
    return next();
  } 
  next({
    status: 404,
    message: `Movie cannot be found.`,
  });   
}

async function read(req, res) {
      res.json({data: res.locals.movie});
}

// async function listMovieIdTheaters(req, res, next) {
//   const { movieId } = req.params
//   const data = await service.listMovieIdTheaters(movieId)
//   res.json({data})
// }
module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(movieExist), read]
};