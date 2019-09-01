let reza = [123,3332,213];
let csvObj;
function loadXMLDoc() {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status === 200) {
                document.getElementById("csv-container").innerHTML = xmlhttp.responseText;
                csvObj = JSON.parse(xmlhttp.responseText);

                console.log(csvObj);
                window.aa = csvObj;
                return csvObj;
            }
            else if (xmlhttp.status === 400) {
                alert('There was an error 400');
            }
            else {
                alert('something else other than 200 was returned');
            }
        }
    };

    xmlhttp.open("GET", "/csv", true);
    xmlhttp.send();
}

let btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    loadXMLDoc();
});