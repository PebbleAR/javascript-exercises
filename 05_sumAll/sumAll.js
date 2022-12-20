const sumAll = function(start, end) {
total = 0
if ((start < 0) || (end < 0) || (typeof(start) !== "number") || (typeof(end) !== "number")) {
    return "ERROR"
}
if (start > end) {
    dummy = start;
    start = end;
    end = dummy;
}
for (let i = start; i<= end; i++) {
    total += i
}
return total
};

// Do not edit below this line
module.exports = sumAll;
