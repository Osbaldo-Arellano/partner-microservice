const { parse } = require("csv-parse");
const fs = require("fs");
require("dotenv").config();

async function getParticiple(words, count) {
  const data = [];

  return new Promise((resolve) => {
    fs.createReadStream("./data/words-multiple-present-participle.csv")
      .pipe(parse({ delimiter: "," }))
      .on("data", (r) => {
        data.push(r);
      })
      .on("end", () => {
        for (let i = 0; i < count; i++) {
          words.participle.push(
            // Push random word
            data[Math.floor(Math.random() * data.length - 1) + 1][1]
          );
        }
        resolve(words);
      });
  });
}

module.exports = { getParticiple };
