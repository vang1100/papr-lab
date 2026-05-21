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

 try {
    const result = await pool.query('SELECT * FROM "blog" ORDER BY id DESC');
    res.send(result.rows);
  } catch (error) {
    console.log('error in query text', error);
    res.sendStatus(500);
  }

});

router.post('/', async (req, res) => {
  const { title, text, photo } = req.body;
  await pool.query(
    'INSERT INTO "blog" (title, text, photo) VALUES ($1, $2, $3)',
    [title, text, photo]
  );
  res.sendStatus(201);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, text, photo, is_liked } = req.body;
  await pool.query(
    'UPDATE blog SET title = $1, text = $2, photo = $3, is_liked = $4  WHERE id = $5',
    [title, text, photo, is_liked, id]
  );
  res.sendStatus(200);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM "blog" WHERE id = $1', [id]);
  res.sendStatus(200);
});

module.exports = router;
