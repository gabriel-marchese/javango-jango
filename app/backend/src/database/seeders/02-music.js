module.exports = {
    up: async (queryInterface) => {
      await queryInterface.bulkInsert('music', [
        {
          music: 'Sad but True',
          band: 'Metallica',
          instrument: 'Guitarra',
          key: '4561a9b3f2c391553d86145a3cf4635a-SadButTrue.pdf',
          url: 'https://javangojango-api.onrender.com/files/4561a9b3f2c391553d86145a3cf4635a-SadButTrue.pdf'
        },
        {
            music: 'Californication',
            band: 'Red Hot Chili Peppers',
            instrument: 'Bateria',
            key: '40e8089cb2363c599cb422fb91c5d1d4-californication-red-hot-chili-peppers-drum-transcription.pdf',
            url: 'https://javangojango-api.onrender.com/files/40e8089cb2363c599cb422fb91c5d1d4-californication-red-hot-chili-peppers-drum-transcription.pdf'
          },
      ], {});
    },
  
    down: async (queryInterface) => {
      await queryInterface.bulkDelete('music', {});
    },
  }
  