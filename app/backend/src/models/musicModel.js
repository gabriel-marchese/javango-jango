const { Music } = require('../database/models/');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

const newMusic = async (fileData, musicData) => {
  const {  filename: key } = fileData;
  const { music, band, instrument } = musicData;
  const url = `http://localhost:3001/files/${key}`

  const data = await Music.create({
    music,
    band,
    instrument,
    key,
    url,
  });

  return data;
}

const listMusics = async () => {
  const listResult = await Music.findAll();
  return listResult;
}

const deleteMusic = async (id) => {
  const key = await Music.findOne({ where: {id} });
  console.log(key.dataValues.key);
  await Music.destroy({ where: { id } })
  return promisify(fs.unlink)(path.resolve(__dirname, "..", "tmp", "uploads", key.dataValues.key))
}

const findMusic = async (id) => {
  const result = await Music.findOne({ where: {id} });
  return result.dataValues;
}

module.exports = {
  newMusic,
  listMusics,
  deleteMusic,
  findMusic
}
