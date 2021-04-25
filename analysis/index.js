const fs = require('fs');
const chemSpell = require('./algorithm');

var corpus = JSON.parse(fs.readFileSync("./corpus/es/es.json"));

var possible = 0;
var total = corpus.length;

var possible_freq = 0;
var total_freq = 0;

for (let i = 0; i < corpus.length; i++) {
    const word = corpus[i];
    if (chemSpell(word[0]).length > 0) {
        possible++;
        possible_freq += word[1];
    }
    total_freq += word[1];
}
console.log(`----------------------------`);
console.log(`Not weighed results:`);
console.log(`Possible: ${possible}/${total} (${percentage(possible, total)})`);
console.log(`Impossible: ${total-possible}/${total} (${percentage(total-possible, total)})`);
console.log(`----------------------------`);
console.log(`Weighed results:`);
console.log(`Possible: ${possible_freq}/${total_freq} (${percentage(possible_freq, total_freq)})`);
console.log(`Impossible: ${total_freq-possible_freq}/${total_freq} (${percentage(total_freq-possible_freq, total_freq)})`);
console.log(`----------------------------`);

function percentage(a, b) {
    const decimals = 2;
    return `${Math.round((10**decimals)*(100*a/b))/(10**decimals)}%`;
}