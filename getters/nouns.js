const { parse } = require("csv-parse");
const fs = require("fs");
require("dotenv").config();

async function getNouns(words, count) {
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
          words.noun.push(
            data[Math.floor(Math.random() * data.length - 1) + 1][0]
          );
        }
        resolve(words);
      });
  });
}
module.exports = { getNouns };
