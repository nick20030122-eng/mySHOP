module.exports = function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  const { password } = req.body || {};
  const correct = process.env.ADMIN_PASSWORD;
  res.json({ ok: Boolean(correct && password === correct) });
};
