const app = require('./app');

const PORT = process.env.APP_PORT || 3001;

app.listen(PORT, () => {
    console.log(`Backend do Store Manager escutando na porta ${PORT}`);
});
