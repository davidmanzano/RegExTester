
function add(num1, num2) {
    return num1 + num2;
}

function validRX() {
    var regex = document.getElementById("regex").value;
    var mod = document.getElementById("mod").value;
    var isValid = true;
    try {
        new RegExp(regex, mod);
    } catch (e) {
        isValid = false;
    }
    if (!isValid) {
        document.getElementById("regex").style.backgroundColor = "#ff5050";
    }
    else {
        document.getElementById("regex").style.backgroundColor = "lightgreen";
        document.getElementById("regex").style.backgroundColor = "lightgreen";
    }
}

function addString() {
    var div = document.getElementById("stringContainer");
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "words[]");
    input.setAttribute("class", "form-control");
    input.setAttribute("rows", "5");
    input.setAttribute("data-toggle", "tooltip");
    input.setAttribute("data-placement", "top");
    input.setAttribute("title", "Enter a string to be checked against the RegEx");
    input.setAttribute("placeholder", "ex. Manzano");
    input.setAttribute("id", "words");

    div.appendChild(input);
    div.appendChild(document.createElement("br"));

}

function tester() {
    
    var regex = document.getElementById("regex").value;
    var strings = document.getElementsByName("words[]");
    var mod = document.getElementById("mod").value;
    var rx = new RegExp(regex, mod);
    
    for (i = 0; i < strings.length; i++) {
        if (rx.test(strings[i].value)) {
            strings[i].style.backgroundColor = "lightgreen";
            var final_str = strings[i].value.replace(rx, function (str) { return '<mark style="background-color:lightgreen;">' + str + '</mark>' });
            $('#highlightedtext').html(final_str);
        }
        else {
            strings[i].style.backgroundColor = "#ff5050";
        }
    }
}

function clear() {
    {
        strings = document.getElementsbyName("words[]");
        for (i = 0; i < strings.length; i++)
        {
            strings.removeChild(strings[i]);
        }
    }
}