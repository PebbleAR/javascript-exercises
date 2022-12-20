const reverseString = function(string) {
    newstring = ''

    for (let i=string.length -1; i >=0; i--) {
        newstring += string.charAt(i)
    }
    return newstring
};

// Do not edit below this line
module.exports = reverseString;
