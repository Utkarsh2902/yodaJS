var myBrowser = document.querySelector("#my-Browser");
var mytxt = document.querySelector("#my-txt");
var myoutput = document.querySelector("#my-output");
var serurl = "	https://api.funtranslations.com/translate/minion.json";


function getURL(text) {
    return serurl + "?" + "text=" + text;
};

function clickHandler() {
    var inputtxt = mytxt.value;
    fetch(getURL(inputtxt))
        .then(response => response.json())
        .then(json => {
            var trasText = json.contents.translated;
            myoutput.innerText = trasText
        })
};
myBrowser.addEventListener("click",clickHandler)

