const { Storage } = require("@google-cloud/storage");

console.log(Storage);

exports.helloWorld = (req, res) => {
  let message = req.query.message || req.body.message || 'Heyy World!';
  res.status(200).send(message);
};

