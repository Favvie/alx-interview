#!/usr/bin/node
const request = require('request');

const url = `https://swapi-api.alx-tools.com/api/films/${process.argv.slice(2)[0]}`;

request(url, (error, response, body) => {
  if (error) console.error(error);

  const characters = JSON.parse(body).characters;

  characters.forEach(characters => {
    request(characters, (error, resp, body) => {
      if (error) console.error(error);
      console.log(JSON.parse(body).name);
    });
  });
});
