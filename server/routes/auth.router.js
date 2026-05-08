const express = require('express');
const router = express.Router();
const pool = require('../pool');

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const result = await pool.query(
      'SELECT id, username, is_admin FROM "user" WHERE username = $1 AND password = $2',
      [username, password]
    );

    if (result.rows.length > 0) {
      req.session.regenerate((err) => {
        if (err) return res.sendStatus(500);
        req.session.user = result.rows[0];
        res.sendStatus(200);
      });
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.error('Login error:', err);
    res.sendStatus(500);
  }
});

router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.sendStatus(500);
    res.sendStatus(200);
  });
});


module.exports = router;
