/*
The following code was used to translate
the raw file 'en.txt' downloaded from
http://ucrel.lancs.ac.uk/bncfreq/flists.html
into en.json, a more friendly format.
*/

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('en.txt')
});

var result = [];

lineReader.on('line', function (line) {
    const str = line.split("");
    var word = "";
    var number = "";
    var doing_function = false;
    var doing_numbers = false;
    var done_function = false;
    for (let i = 1; i < str.length; i++) {
        const char = str[i];
        if (char === " " || char === "	") {
            doing_numbers = true;
            if (doing_function && done_function) doing_function = false;
            if (!done_function && !done_function) doing_function = true;
            continue;
        }
        if (!doing_function) {
            if (doing_numbers) number += char;
            else word += char;
        } else {
            done_function = true;
        }
        
    }
    result.push([word, Number.parseInt(number)]);
});

lineReader.on('close', function () {
    require('fs').writeFileSync("en.json", JSON.stringify(result));
    console.log("Done");
});