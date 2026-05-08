function requireAdmin(req, res, next) {
  if (req.session.user && req.session.user.is_admin) {
    next();
  } else {
    res.sendStatus(403);
  }
}

module.exports = requireAdmin;
