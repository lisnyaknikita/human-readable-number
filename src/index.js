module.exports = function toReadable(number) {
    const units = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const hundreds = [
        "",
        "one hundred",
        "two hundred",
        "three hundred",
        "four hundred",
        "five hundred",
        "six hundred",
        "seven hundred",
        "eight hundred",
        "nine hundred",
    ];

    if (number === 0) return "zero";

    function converter(number) {
        if (number < 20) {
            const result = units[number];

            return result.trim();
        } else if (number < 100) {
            const result = `${tens[Math.floor(number / 10)]} ${
                units[number % 10]
            }`;

            return result.trim();
        } else {
            const result = `${hundreds[Math.floor(number / 100)]} ${converter(
                number % 100
            )}`;

            return result.trim();
        }
    }

    return converter(number);
};
