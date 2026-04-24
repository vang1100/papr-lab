function requireAdmin(req, res, next) {
  
  const requireAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ error: 'Admin access required' });
  }
};

  if (req.session.user) {
    next();
  } else {
    res.sendStatus(403);
  }
}

module.exports = requireAdmin;
