const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR"
    }
    returnstring = ''
    for (let i = 1; i <= num; i++) {
        returnstring += string;
    }
    return returnstring
};

// Do not edit below this line
module.exports = repeatString;
