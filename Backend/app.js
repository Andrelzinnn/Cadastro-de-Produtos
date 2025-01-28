const express = require('express');
const cors = require('cors');
const productRoutes = require('../Backend/routes/productsRoutes');

const app = express();
const port = process.env.PORT || 8000

app.use(cors());
app.use(express.json());

app.use('/products', productRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Ocorreu um erro no servidor.');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
