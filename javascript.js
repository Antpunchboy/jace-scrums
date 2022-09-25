function creating() {
    alert("Generating Scrummy pin");
    let randomstring = Math.random().toString(36).slice(-8);
    document.getElementById("output").value = randomstring;
};

function joining() {
    let pin = prompt(`Type in the Scrummy pin
(does not work, still learning about mongoDB database to let people create their own accounts)`);
    if (pin === "") {
        alert("Invalid pin");
    }
    else if (pin !== null) {
        alert(`entering Scrummy [${pin}]...`);
    }
};