const express = require('express');
const router = express.Router();
const pool = require('../pool');

router.get('/', async (req, res) => {
//   const result = await pool.query('SELECT * FROM posts ORDER BY id');
//   res.send(result.rows);
});

router.get('/:id', async (req, res) => {
//   const result = await pool.query('SELECT * FROM posts WHERE id = $1', [req.params.id]);
//   res.send(result.rows[0]);
});

module.exports = router;
