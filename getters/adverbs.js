const { parse } = require("csv-parse");
const fs = require("fs");

require("dotenv").config();

async function getAdverb(words, count) {
  const data = [];

  return new Promise((resolve) => {
    fs.createReadStream("./data/adverbs.csv")
      .pipe(parse({ delimiter: ",", relax_column_count: true }))
      .on("data", (r) => {
        data.push(r);
      })
      .on("end", () => {
        for (let i = 0; i < count; i++) {
          //Push random word
          words.adverb.push(
            data[Math.floor(Math.random() * data.length - 1) + 1][0]
          );
        }
        console.log(words);
        resolve(words);
      });
  });
}

module.exports = { getAdverb };
