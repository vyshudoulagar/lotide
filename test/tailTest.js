const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(words.length, 2); // check if array length is 2
assertEqual(words[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(words[1], "Labs");

const words1 = ["Hello"];
assertEqual(words1.length, 1);
assertEqual(tail(words1).length, 0);

const words2 = [];
assertEqual(words2.length, 0);