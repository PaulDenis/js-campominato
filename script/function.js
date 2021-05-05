function getRandomNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function existInArray (num, array) {
    for (var i=0; i < array.length; i++) {
        if(num == array[i]) {
            return true;
        }
    }
    return false;
}