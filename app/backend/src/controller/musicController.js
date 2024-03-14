const { musicService } = require('../services/index');
  
const newMusic = async (req, res) => {
  const musicData = req.body;
  const fileData = req.file;
  await musicService.newMusic(fileData, musicData)
  return res.status(200).json();
}

const listMusics = async (req, res) => {
  const musics = await musicService.listMusics();
  return res.status(200).json(musics.data);
}

const deleteMusic = async (req, res) => {
  const { id } = req.params;
  const result = await musicService.deleteMusic(id);
  return res.status(200).json(result.status)
}

const findMusic = async (req, res) => {
  const { id } = req.params;
  const result = await musicService.findMusic(id);
  return res.status(200).json(result.data);
}

module.exports = {
  newMusic,
  listMusics,
  deleteMusic,
  findMusic
}
