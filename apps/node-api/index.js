const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/from-python', async (req, res) => {
  try {
    const response = await axios.get('http://python_api:5000/');
    res.send({ messageFromPython: response.data });
  } catch (error) {
    console.error('Erro ao chamar a API Python:', error.message);
    res.status(500).send('Erro ao chamar a API Python');
  }
});

app.listen(PORT, () => {
  console.log(`Node.js API rodando em http://localhost:${PORT}`);
});
