const Navigator = require('./libs/Navigator');
const urls = require('./libs/urls');
let request = require('request');
request = request.defaults({jar: true});

const logIn = function(user, password) {
  const requestParams = {
    url: urls.indexPath,
    form: {
      login: user,
      passwd: password,
    },
  };

  return new Promise((ressolve, reject) => {
    request.post(requestParams, (err, res, body) => {
      if (!err && res.statusCode === 200) {
        ressolve(new Navigator(request));
      } else {
        reject(err);
      }
    });
  });
};

module.exports = logIn;
