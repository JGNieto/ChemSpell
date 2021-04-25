$("form#spell_form").submit((event) => {
    event.preventDefault();
    var input = $("#text").val();
    if (/\s/g.test(input)) {
        alert("No spaces. Please type the words in individually.");
        return;
    }
    var results = chemSpell($("#text").val());
    
    $("#result").html("");

    if (results.length === 0) {
        $("#result").text("Impossible");
    }
    if (results.length > 1) {
        $("#result").append(`${results.length} options found.`)
    }

    for (var i = 0; i < results.length; i++) {
        /*if (i !== 0) {
            $("#result").append("<hr/>");
        }*/
        const result = results[i];
        var html = ""
        if (results.length > 1) {
            html += `
                <div class="title">
                    Option ${i+1}:
                </div>
            `;
        }
        html += `<div class="word">`;
        for (var j = 0; j < result.length; j++) {
            html += `
                <div class="element">
                    <span class="atomic">${result[j][2]}</span>
                    <span class="symbol">${result[j][0]}</span>
                    <span class="name">${result[j][1]}</span>
                </div>
            `;
        }
        html += `</div>`;
        $("#result").append(html);
    }
});

