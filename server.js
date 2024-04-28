const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Устанавливаем путь к статическим файлам
app.use(express.static(path.join(__dirname, 'public')));

// Маршрут для отдачи HTML-страницы
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});