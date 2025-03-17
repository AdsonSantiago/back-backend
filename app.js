// index.js (Back-end)
const express = require('express');
const cors = require('cors'); // Para permitir requisições do front-end
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para permitir requisições de outros domínios (CORS)
app.use(cors());

// Rota de exemplo
app.get('/api', (req, res) => {
  res.json({ message: 'Olá, mundo!' });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});