const bcrypt = require('bcryptjs');
const { musicModel } = require('../models/index');
const jwt = require('../utils/jwt');

const newMusic = async (fileData, musicData) => {
  const dataResult = await musicModel.newMusic(fileData, musicData);
  return { status: 'SUCCESSFUL', data: dataResult };
}

const listMusics = async () => {
  const dataResult = await musicModel.listMusics();
  return { status: 'SUCCESSFUL', data: dataResult };
}

const deleteMusic = async (id) => {
  const dataDelete = await musicModel.deleteMusic(id);
  return { status: 'SUCCESSFUL', data: dataDelete };
}

const findMusic = async (id) => {
  const result = await musicModel.findMusic(id);
  return { status: 'SUCCESSFUL', data: result };
}

module.exports = {
  newMusic,
  listMusics,
  deleteMusic,
  findMusic
}
