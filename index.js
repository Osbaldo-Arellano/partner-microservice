const express = require("express");
const app = express();
const port = 5000;
const verbs = require("./getters/verbs");
const nouns = require("./getters/nouns");
const pluralNoun = require("./getters/pluralNouns");
const participle = require("./getters/participle");
const adjectives = require("./getters/adjectives");
const adverb = require("./getters/adverbs");
require("dotenv").config();

app.get("/words/:words", async (req, res) => {
  var json = JSON.parse(req.params.words);
  const verbNum = json.verb;
  const nounNum = json.noun;
  const adjNum = json.adjective;
  const adverbNum = json.adverb;
  const pluralNounNum = json.pluralNoun;
  const participleNum = json.participle;

  let words = {
    noun: [],
    pluralNoun: [],
    adjective: [],
    verb: [],
    participle: [],
    adverb: [],
  };

  await verbs.getVerbs(words, verbNum);
  await nouns.getNouns(words, nounNum);
  await adjectives.getAdjectives(words, adjNum);
  await adverb.getAdverb(words, adverbNum);
  await pluralNoun.getPluralNouns(words, pluralNounNum);
  await participle.getParticiple(words, participleNum);

  res.send(words);
});

app.listen(port, () => {
  console.log(`Requesting app listening on port ${port}`);
});
