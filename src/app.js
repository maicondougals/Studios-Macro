
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, '../public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'services.html'));
});

app.get('/9267gazerj9r5t4jonif5dicj9vr8l.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', '9267gazerj9r5t4jonif5dicj9vr8l.html'));
});

// Iniciar o servidor

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://0.0.0.0:${PORT}`);
  });