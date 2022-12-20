const removeFromArray = function(array) {
    let args = Array.prototype.slice.call(arguments, 0);
    args = args.slice(1);

    for (const value of args) {
        for (let index= 0; index <= array.length -1; index++) {
            if (value === array[index]) {
                array.splice(index,1)
                break
            }
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
