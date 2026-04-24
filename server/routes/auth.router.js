const express = require('express');
const router = express.Router();
const pool = require('../pool');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const result = await pool.query(
    'SELECT * FROM "user" WHERE username = $1 AND password = $2',
    [username, password]
  );

  if (result.rows.length > 0) {
    req.session.user = result.rows[0];
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

router.post('/logout', (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
});

module.exports = router;
