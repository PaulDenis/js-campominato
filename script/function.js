function getRandomNum (min, max) {
    //restituisce un numero casuale in un determinato range, estremi inclusi
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function existInArray (num, array) {
    //controlla tutte le posizioni di array per vedere se il "num" si trova già all'interno.
    for (var i=0; i < array.length; i++) {
        if(num == array[i]) {
            return true;
        }
    }
    return false;
}