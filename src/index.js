module.exports = function toReadable(number) {
    let tens;
    let numberToWord = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        19: "nineteen",
        18: "eighteen",
    };
    if (20 <= number) {
        tens = {
            20: "twenty",
            30: "thirty",
            40: "forty",
            50: "fifty",
            60: "sixty",
            70: "seventy",
            80: "eighty",
            90: "ninety",
        };
        const num = String(number).split("");
        if (num.length === 2)
            if (number % 10 == 0) {
                return tens[number];
            } else {
                if (num[0] == 2) {
                    return "twenty" + " " + numberToWord[num[1]];
                }
                if (num[0] == 3) {
                    return "thirty" + " " + numberToWord[num[1]];
                }
                if (num[0] == 4) {
                    return "forty" + " " + numberToWord[num[1]];
                }
                if (num[0] == 5) {
                    return "fifty" + " " + numberToWord[num[1]];
                }
                if (num[0] == 6) {
                    return "sixty" + " " + numberToWord[num[1]];
                }
                if (num[0] == 7) {
                    return "seventy" + " " + numberToWord[num[1]];
                }
                if (num[0] == 8) {
                    return "eighty" + " " + numberToWord[num[1]];
                }
                if (num[0] == 9) {
                    return "ninety" + " " + numberToWord[num[1]];
                }
            }
        if (num.length === 3)
            if (number % 100 != 0) {
                if (number % 10 === 0)
                    if (num[1] != 2) {
                        if (num[1] != 3) {
                            if (num[1] == 4) {
                                return (
                                    numberToWord[parseInt(num[0])] +
                                    " hundred " +
                                    tens[40]
                                );
                            }
                            if (num[1] == 5) {
                                return (
                                    numberToWord[parseInt(num[0])] +
                                    " hundred " +
                                    tens[50]
                                );
                            }
                            if (num[1] == 6) {
                                return (
                                    numberToWord[parseInt(num[0])] +
                                    " hundred " +
                                    tens[60]
                                );
                            }
                            if (num[1] == 7) {
                                return (
                                    numberToWord[parseInt(num[0])] +
                                    " hundred " +
                                    tens[70]
                                );
                            }
                            if (num[1] == 8) {
                                return (
                                    numberToWord[parseInt(num[0])] +
                                    " hundred " +
                                    tens[80]
                                );
                            }
                            if (num[1] == 9) {
                                return (
                                    numberToWord[parseInt(num[0])] +
                                    " hundred " +
                                    tens[90]
                                );
                            }
                        } else {
                            return (
                                numberToWord[parseInt(num[0])] +
                                " hundred " +
                                tens[30]
                            );
                        }
                    } else {
                        return (
                            numberToWord[parseInt(num[0])] +
                            " hundred " +
                            tens[20]
                        );
                    }
                if (num[1] == 0) {
                    return (
                        numberToWord[parseInt(num[0])] +
                        " hundred " +
                        numberToWord[num[2]]
                    );
                }
                if (num[1] == 1) {
                    if (num[2] == 0) {
                        return (
                            numberToWord[parseInt(num[0])] +
                            " hundred " +
                            numberToWord[10]
                        );
                    }
                    if (num[2] == 1) {
                        return (
                            numberToWord[parseInt(num[0])] +
                            " hundred " +
                            numberToWord[11]
                        );
                    }
                    if (num[2] == 2) {
                        return (
                            numberToWord[parseInt(num[0])] +
                            " hundred " +
                            numberToWord[12]
                        );
                    }
                    if (num[2] == 3) {
                        return (
                            numberToWord[parseInt(num[0])] +
                            " hundred " +
                            numberToWord[13]
                        );
                    }
                    if (num[2] == 4) {
                        return (
                            numberToWord[parseInt(num[0])] +
                            " hundred " +
                            numberToWord[14]
                        );
                    }
                    if (num[2] == 5) {
                        return (
                            numberToWord[parseInt(num[0])] +
                            " hundred " +
                            numberToWord[15]
                        );
                    }
                    if (num[2] == 6) {
                        return (
                            numberToWord[parseInt(num[0])] +
                            " hundred " +
                            numberToWord[16]
                        );
                    }
                    if (num[2] == 7) {
                        return (
                            numberToWord[parseInt(num[0])] +
                            " hundred " +
                            numberToWord[17]
                        );
                    }
                    if (num[2] == 8) {
                        return (
                            numberToWord[parseInt(num[0])] +
                            " hundred " +
                            numberToWord[18]
                        );
                    }
                    if (num[2] == 9) {
                        return (
                            numberToWord[parseInt(num[0])] +
                            " hundred " +
                            numberToWord[19]
                        );
                    }
                }
                if (num[1] == 2) {
                    return (
                        numberToWord[parseInt(num[0])] +
                        " hundred " +
                        tens[20] +
                        " " +
                        numberToWord[num[2]]
                    );
                }
                if (num[1] == 3) {
                    return (
                        numberToWord[parseInt(num[0])] +
                        " hundred " +
                        tens[30] +
                        " " +
                        numberToWord[num[2]]
                    );
                }
                if (num[1] == 4) {
                    return (
                        numberToWord[parseInt(num[0])] +
                        " hundred " +
                        tens[40] +
                        " " +
                        numberToWord[num[2]]
                    );
                }
                if (num[1] == 5) {
                    return (
                        numberToWord[parseInt(num[0])] +
                        " hundred " +
                        tens[50] +
                        " " +
                        numberToWord[num[2]]
                    );
                }
                if (num[1] == 6) {
                    return (
                        numberToWord[parseInt(num[0])] +
                        " hundred " +
                        tens[60] +
                        " " +
                        numberToWord[num[2]]
                    );
                }
                if (num[1] == 7) {
                    return (
                        numberToWord[parseInt(num[0])] +
                        " hundred " +
                        tens[70] +
                        " " +
                        numberToWord[num[2]]
                    );
                }
                if (num[1] == 8) {
                    return (
                        numberToWord[parseInt(num[0])] +
                        " hundred " +
                        tens[80] +
                        " " +
                        numberToWord[num[2]]
                    );
                }
                if (num[1] == 9) {
                    return (
                        numberToWord[parseInt(num[0])] +
                        " hundred " +
                        tens[90] +
                        " " +
                        numberToWord[num[2]]
                    );
                }
            } else {
                return numberToWord[parseInt(num[0])] + " hundred";
            }
    } else {
        return numberToWord[number];
    }
};
