const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop("Garfield");
}
function destructivelyRemoveFirstCat() {
    cats.shift("Milo");
}
function appendCat() {
    const twocats = [...cats, "Broom"];
    return twocats;
}

function prependCat() {
    const twocats = ["Arnold",...cats];
    return twocats;
}

function removeLastCat() {
    return cats.slice(0, 2);
    
}

function removeFirstCat() {
    return cats.slice(1);
}