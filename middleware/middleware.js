const request = require('request');
const host = 'http://localhost:3333';
const basePath = `${host}`;
const defaultTimeout = 0;

module.exports = {
  postLogin: (body) => new Promise((resolve, reject) => {
    request({
      timeout: defaultTimeout,
      uri: `${basePath}/users/login`,
      json: true,
      method: 'POST',
      body: body
    }, (error, response, body) => {
      console.log(error)
      if (error || response.statusCode != 200) return reject(error)
      return resolve(body)
    })
  }),
  postRegister: (body) => new Promise((resolve, reject) => {
    request({
      timeout: defaultTimeout,
      uri: `${basePath}/users/register`,
      json: true,
      method: 'POST',
      body: body
    }, (error, response, body) => {
      console.log(error)
      if (error || response.statusCode != 200) return reject(error)
      return resolve(body)
    })
  })
}