const invariant = require('invariant');

module.exports = (req, res) => {
  console.log(req.method);
  invariant(req.method.toLowerCase() === 'post', 'test');
  res.end('Hello World');
}
