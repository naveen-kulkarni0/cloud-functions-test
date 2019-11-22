exports.helloWorld = (req, res) => {
  let message = req.query.message || req.body.message || 'Hey World!';
  res.status(200).send(message);
};

