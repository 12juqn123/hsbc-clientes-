const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const port = 3000;

const botToken = 'tu_token_de_bot';
const chatId = 'tu_id_de_chat';

const bot = new TelegramBot(botToken, { polling: true });

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/enviar-a-telegram', (req, res) => {
  const usuario = req.body.usuario;
  bot.sendMessage(chatId, `Nuevo usuario: ${usuario}`)
    .then(() => {
      res.send('Datos enviados a Telegram exitosamente');
    })
    .catch((error) => {
      res.status(500).send('Error al enviar los datos a Telegram');
    });
});

app.listen(port, () => {
  console.log(`Servidor Node.js corriendo en http://localhost:${port}`);
});

