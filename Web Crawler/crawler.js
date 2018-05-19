// enter something in here to find all the objects with the links you wanna crawl
var elements = document.querySelectorAll(".link-class");
var keywords = ["hello world"];

for (var i = 0; i < elements.length; i++) {
    let link = elements[i].children[0].href;
    $.get(link, function(data) {
        data = data.toLowerCase();

        let results = [];
        for (var j = 0; j < keywords.length; j++) {
            if (data.indexOf(keywords[j].toLowerCase()) > -1) {
                results.push(true);
            }
        }

        if (results.length >= keywords.length) {
            console.log(link);
        }
    });
}