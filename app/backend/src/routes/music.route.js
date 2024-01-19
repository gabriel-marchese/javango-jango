const musicRoutes = require('express').Router();
const musicController = require('../controller/musicController')
const multer = require('multer')
const multerConfig = require('../middlewares/multer');
const { Music } = require('../database/models/');

musicRoutes.get("/home", async  (req, res) => musicController.listMusics(req, res));
musicRoutes.get("/music/:id", async (req, res) => musicController.findMusic(req, res));

musicRoutes.post("/music/create", multer(multerConfig).single('file'), async (req, res) => musicController.newMusic(req, res));

musicRoutes.delete("/music/:id", async (req, res) => musicController.deleteMusic(req, res));

module.exports = musicRoutes;
