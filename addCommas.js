// This exercise is suspiciously easy if I use the .toLocaleString method....so I assume that I should try NOT use it?
//
// function addCommas(num) {
//     return num.toLocaleString('en-US');
// }


function addCommas(num) {
    // Splits number into two segments to identify integer and decimal digits
    let splitNum = num.toString().split(".");
    let integer = splitNum [0];
    let decimal = splitNum.length > 1 ? "." + splitNum[1] : "";
    let sign = '';
  
    // Checks for negative num
    if (integer.startsWith("-")) {
      sign = '-';
      integer = integer.slice(1);
    }
  
    // Reverses integer to easily add the commas - adds commas after every 3rd digit/index of the reversed integer
    let reversedInt = integer.split("").reverse().join("");
    let withCommas = '';

    for (let i = 0; i < reversedInt.length; i++) {
      if (i > 0 && i % 3 === 0) {
        withCommas += ",";
      }
      withCommas += reversedInt[i];
    }
  
    // Reverse string back to normal and join w/ decimal part and/or negative sign
    return sign + withCommas.split("").reverse().join("") + decimal;
  }
  
  module.exports = addCommas;
  