#!/usr/bin/node
const request = require('request');

function Characters(movieID) {
    movieID = process.argv.slice(2)[0]
    let url = `https://swapi-api.alx-tools.com/api/films/${movieID}`
    request(url, (error, response, body) => {
        if (error) console.error(error)

        const characters = JSON.parse(body).characters
        for (let character of characters) {
            request(character, (error, response, body) => {
                let name = JSON.parse(body).name
                console.log(name)
            })
        }

    });


}

Characters()