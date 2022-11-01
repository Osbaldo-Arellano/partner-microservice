const { parse } = require("csv-parse");
const fs = require("fs");
require("dotenv").config();

async function getPluralNouns(words, count) {
  const data = [];

  return new Promise((resolve) => {
    fs.createReadStream("./data/nouns.csv")
      .pipe(parse({ delimiter: ",", relax_column_count: true }))
      .on("data", (r) => {
        data.push(r);
      })
      .on("end", () => {
        for (let i = 0; i < count; i++) {
          //Push random word
          words.pluralNoun.push(
            data[Math.floor(Math.random() * data.length - 1) + 1][1]
          );
        }
        resolve(words);
      });
  });
}

module.exports = { getPluralNouns };
