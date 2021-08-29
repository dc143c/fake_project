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
      if (error || response.statusCode != 200) return reject(error)
      return resolve(body)
    })
  }),
  buscaUser: (body) => new Promise((resolve, reject) => {
    request({
      timeout: defaultTimeout,
      uri: `${basePath}/users/busca`,
      json: true,
      method: 'POST',
      body: body
    }, (error, response, body) => {
      if (error || response.statusCode != 200) return reject(error)
      return resolve(body)
    })
  }),
  buscaPostsUser: (body) => new Promise((resolve, reject) => {
    request({
      timeout: defaultTimeout,
      uri: `${basePath}/users/buscar_posts`,
      json: true,
      method: 'POST',
      body: body
    }, (error, response, body) => {
      if (error || response.statusCode != 200) return reject(error)
      return resolve(body)
    })
  }),
  setLogged: (body) => new Promise((resolve, reject) => {
    request({
      timeout: defaultTimeout,
      uri: `${basePath}/users/loginstatus`,
      json: true,
      method: 'POST',
      body: body
    }, (error, response, body) => {
      if (error || response.statusCode != 200) return reject(error)
      return resolve(body)
    })
  }),
  
  createPost: (body) => new Promise((resolve, reject) => {
    request({
      timeout: defaultTimeout,
      uri: `${basePath}/users/cria_post`,
      json: true,
      method: 'POST',
      body: body
    }, (error, response, body) => {
      if (error || response.statusCode != 200) return reject(error)
      return resolve(body)
    })
  })
}