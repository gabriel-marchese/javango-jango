module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Admin',
        role: 'admin',
        email: 'admin@admin.com',
        password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
        // senha: secret_admin
        is_active: true,
        price: 200,
        payment: '2023/11/22',
        type: 'Guitarra'
      },
      {
        name: 'User',
        role: 'user',
        email: 'user@user.com',
        password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
        is_active: false,
          // senha: secret_user
        price: 200,
        payment: '2023/11/22',
        type: 'Bateria'
      },
      {
        name: 'User',
        role: 'user',
        email: 'user@user1.com',
        password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
        is_active: true,
          // senha: secret_user
        price: 200,
        payment: '2023/11/22',
        type: 'Baixo'
      },
      {
        name: 'User',
        role: 'user',
        email: 'user@user2.com',
        password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
        is_active: true,
          // senha: secret_user
        price: 200,
        payment: '2023/10/21',
        type: 'Guitarra'
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
}
