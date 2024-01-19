const routes = require('express').Router();
const multer = require('multer')
const multerConfig = require('../src/middlewares/multer');

routes.get("/", async  (req, res) => {

    return res.json({hello: "World"})
})

routes.post("/create/music", multer(multerConfig).single('file'), async (req, res) => {
    console.log(req.file);
    return res.json({hello: "World"})
})

module.exports = routes;
