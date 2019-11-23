exports.helloWorld = (req, res) => {
  let message = req.query.message || req.body.message || 'Heyy World!';
  res.status(200).send(message);
};

