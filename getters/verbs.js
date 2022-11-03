const { parse } = require("csv-parse");
const fs = require("fs");
require("dotenv").config();

async function getVerbs(words, count) {
  const data = [];

  return new Promise((resolve) => {
    fs.createReadStream("./data/verbs.csv")
      .pipe(parse({ delimiter: "," }))
      .on("data", (r) => {
        for (let i = 0; i < r.length; i++) {
          let current = r[i];
          if (
            current.substring(r[i].length - 3) != "ing" &&
            current.substring(r[i].length - 4) != "ings" &&
            current.substring(r[i].length - 5) != "ing's"
          ) {
            data.push(r);
          }
        }
      })
      .on("end", () => {
        for (let i = 0; i < count; i++) {
          words.verb.push(
            // Push random word
            data[Math.floor(Math.random() * data.length) + 1][0]
          );
        }
        resolve(words);
      });
  });
}
module.exports = { getVerbs };
