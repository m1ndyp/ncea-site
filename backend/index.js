const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
  origin: ['https://ncea-site.vercel.app', 'http://localhost:5173']
}));
app.use(express.json());

const pool = new Pool({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  ssl: { rejectUnauthorized: false }
});

// Создать таблицу если нет
pool.query(`
  CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    service VARCHAR(255),
    message TEXT
  )
`).then(() => console.log('Таблица готова'))
  .catch(err => console.error('Ошибка таблицы:', err));

app.post('/api/orders', async (req, res) => {
  const { name, email, service, message } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO orders (name, email, service, message) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, service, message]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

app.get('/', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));