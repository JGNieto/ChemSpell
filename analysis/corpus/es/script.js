/*
The following code was used to translate
the raw file 'es.txt' downloaded from
http://corpus.rae.es/lfrecuencias.html
into es.json, a more friendly format.
The whole corpus was not used because
the compression made accented characters
corrupted. If this does not happen to you,
feel free to analyse the whole corpus.
*/

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('es.txt')
});

var result = [];

lineReader.on('line', function (line) {
    const str = line.split(".	")[1].split("");
    var word = "";
    var number = "";
    var doing_numbers = false;
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === " " || char === "	") {
            if (doing_numbers && number === "") break;
            else doing_numbers = true;
            continue;
        }
        if (doing_numbers) {
            number += char;
        } else {
            word += char;
        }
    }
    result.push([word, Number.parseInt(number)]);
});

lineReader.on('close', function () {
    require('fs').writeFileSync("es.json", JSON.stringify(result));
    console.log("Done");
});