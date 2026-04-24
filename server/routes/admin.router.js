const express = require('express');
const router = express.Router();
const requireAdmin = require('../middleware/requireAdmin');
const pool = require('../pool');

router.use(requireAdmin);

router.get('/test', (req, res) => {
  res.send('server is working');
});

router.get('/', async (req, res) => {
//   const result = await pool.query('SELECT * FROM posts ORDER BY id');
//   res.send(result.rows);
});

router.post('/', async (req, res) => {
//   const { title, body } = req.body;
//   await pool.query(
//     'INSERT INTO posts (title, body) VALUES ($1, $2)',
//     [title, body]
//   );
//   res.sendStatus(201);
});

router.put('/:id', async (req, res) => {
//   const { id } = req.params;
//   const { title, body } = req.body;
//   await pool.query(
//     'UPDATE posts SET title = $1, body = $2 WHERE id = $3',
//     [title, body, id]
//   );
//   res.sendStatus(200);
});

router.delete('/:id', async (req, res) => {
//   const { id } = req.params;
//   await pool.query('DELETE FROM posts WHERE id = $1', [id]);
//   res.sendStatus(200);
});

module.exports = router;
