const { parse } = require("csv-parse");
const fs = require("fs");
require("dotenv").config();

async function getAdjectives(words, count) {
  const data = [];

  return new Promise((resolve) => {
    fs.createReadStream("./data/adjectives.csv")
      .pipe(parse({ delimiter: "," }))
      .on("data", (r) => {
        data.push(r);
      })
      .on("end", () => {
        for (let i = 1; i < count; i++) {
          words.adjective.push(
            // Push random word
            data[Math.floor(Math.random() * data.length) + 1][0]
          );
        }
        resolve(words);
      });
  });
}

module.exports = { getAdjectives };
