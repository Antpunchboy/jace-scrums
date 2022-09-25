function creating() {
    alert("poops");
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