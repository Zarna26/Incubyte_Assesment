// stringCalculator.js

function add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /,|\n/;

    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf('\n');
        const delimiterLine = numbers.substring(2, delimiterEndIndex);
        const escapedDelimiter = delimiterLine.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
        delimiter = new RegExp(escapedDelimiter);
        numbers = numbers.substring(delimiterEndIndex + 1);
    }

    const tokens = numbers.split(delimiter).filter(Boolean);

    let sum = 0;
    const negativeNumbers = [];

    for (let token of tokens) {
        const num = parseInt(token, 10);
        if (isNaN(num)) continue;
        if (num < 0) {
            negativeNumbers.push(num);
        } else {
            sum += num;
        }
    }

    if (negativeNumbers.length > 0) {
        throw new Error("negative numbers not allowed: " + negativeNumbers.join(","));
    }

    return sum;
}

module.exports = add;
