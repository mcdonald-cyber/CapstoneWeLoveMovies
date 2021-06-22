const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");


async function list(req, res, next) {
   const data = await service.list(req.query.is_showing);
  res.json({ data });
}


async function read(req, res, next) {
    const data = await service.read();
    res.json(res.locals.data);
}

module.exports = {
  list: asyncErrorBoundary(list),
  read
};