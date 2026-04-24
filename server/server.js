const express = require('express');
const session = require('express-session');
const app = express();
const pool = require('./database/pool');

app.use(express.json());
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false
}));

const publicRouter = require('./routes/public.router');
const adminRouter = require('./routes/admin.router');
const authRouter = require('./routes/auth.router');

app.use('/api/posts', publicRouter);
app.use('/api/admin', adminRouter);
app.use('/api/auth', authRouter);

app.listen(5001, () => {
  console.log('Server running on 5001');
});
