const axios = require("axios");
require("dotenv").config();

async function getAdjectives(words, count) {
  //Generate random number for paging
  const rand = Math.floor(Math.random() * 3000) + 1;

  const url =
    "https://wordsapiv1.p.rapidapi.com/words/?partOfSpeech=adjective&page=" +
    rand +
    "&limit=" +
    count;

  const options = {
    method: "GET",
    url: url,
    headers: {
      "X-RapidAPI-Key": process.env.APIKEY,
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
    },
  };

  return await axios
    .request(options)
    .then(function (response) {
      for (let i = 0; i < count; i++) {
        words.adjective.push(
          response.data.results.data[
            Math.floor(Math.random() * response.data.results.data.length - 1) +
              1
          ]
        );
      }
      return this.words;
    })
    .catch(function (error) {
      console.error(error);
    });
}

module.exports = { getAdjectives };
