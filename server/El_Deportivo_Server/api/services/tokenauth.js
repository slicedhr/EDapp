var
  jwt = require('jsonwebtoken'),
  tokenSecret = "6EAD434CB31178FE955F13B251EF2";

module.exports.issue = function(payload) {
  return jwt.sign(
    payload,
    tokenSecret,
    {}
  );
};

module.exports.verify = function(token, callback) {
  return jwt.verify(
    token, 
    tokenSecret,
    {},
    callback
  );
};