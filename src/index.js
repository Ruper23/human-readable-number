module.exports = function toReadable(number) {
   let strNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
   let strUpperNumber = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   let strBigNumber = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   let strHundred = "hundred";
   let numToStr = number.toString();
   if (number === 20 || number === 30 || number === 40 || number === 50 || number === 60 || number === 70 || number === 80 || number === 90) {
      return strBigNumber[Number(numToStr[0]) - 2];
   } else if (number >= 20 && number < 100) {
      return strBigNumber[Number(numToStr[0]) - 2] + " " + strNumber[Number(numToStr[1])];
   } else if (number < 10) {
      return strNumber[number];
   } else if (number >= 10 && number < 20) {
      return strUpperNumber[Number(numToStr[1])];
   }
   else if (number === 100 || number === 200 || number === 300 || number === 400 || number === 500 || number === 600 || number === 700 || number === 800 || number === 900) {
      return strNumber[Number(numToStr[0])] + " " + strHundred;
   } else if (Number(numToStr[1]) === 0 && Number(numToStr[2]) > 0) {
      return strNumber[Number(numToStr[0])] + " " + strHundred + " " + strNumber[Number(numToStr[2])];
   } else if (number > 109 && number < 120 || number > 209 && number < 220 || number > 309 && number < 320 || number > 409 && number < 420 || number > 509 && number < 520 || number > 609 && number < 620 || number > 709 && number < 720 || number > 809 && number < 820 || number > 909 && number < 920) {
      return strNumber[Number(numToStr[0])] + " " + strHundred + " " + strUpperNumber[Number(numToStr[2])];
   } else if (number >= 110 && number < 200 || number >= 210 && number < 300 || number >= 310 && number < 400 || number >= 410 && number < 500 || number >= 510 && number < 600 || number >= 610 && number < 700 || number >= 710 && number < 800 || number >= 810 && number < 900 || number >= 910 && number < 1000) {
      let numStrA = strNumber[Number(numToStr[0])] + " " + strHundred + " " + strBigNumber[Number(numToStr[1]) - 2];
      if (Number(numToStr[2]) === 0) {
         return numStrA;
      }
      return numStrA + " " + strNumber[Number(numToStr[2])];
   }
}
