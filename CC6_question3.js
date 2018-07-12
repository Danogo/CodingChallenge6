// Question 3: 
// Write a function that converts HEX to RGB. 
// Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB 
// and if you enter RGB color format it returns HEX.

// ==== Answer ====
const convertColors = color => {
  // callback function converting HEX values to decimal values
  const repToRgb = charHex => {
    let charInt = parseInt(charHex, 16);
    // add proper rgb-like formatting and return this value
    return `${charInt}, `
  };

  // function converting HEX color to RGB color
  const convHexToRgb = colHex => {
    // removing # sign
    colHex = (colHex.charAt(0) === '#') ? colHex.slice(1) : colHex;
    // replace each pair of hex value with decimal value
    let colRgb = colHex.replace(/\w{2}/gi, repToRgb);
    // remove additional space and comma
    colRgb = colRgb.slice(0, -2);
    // returning string with proper formatting
    return `rgb(${colRgb})`;
  };

  // callback function converting rgb strings to numbers and then converting numbers to corresponding hexadecimal value strings
  // if number needs only four last bits, add 0 at the beginning to maintain same formatting (#000000)
  const mapToHex = stringNum => Number(stringNum).toString(16).length === 2 ? Number(stringNum).toString(16) : `0${Number(stringNum).toString(16)}`;

  // function converting RGB color to HEX color
  const convRgbToHex = colRgb => {
    // find all numbers consisted of 1, 2 or 3 digits and put them in array
    let rgbStrings =  colRgb.match(/\d{1,3}/g);
    // map through all RGB color strings and convert them to HEX color strings
    let hexStrings = rgbStrings.map(mapToHex);
    // join all elements of an array to make one concise string.
    hexString = hexStrings.join('');
    // add # at the beginning and return HEX color string
    return `#${hexString}`;
  };

  // function detecting format of argument and running proper converter
  const detectAndConvert = arg => {
    if (/(rgb\()?(\s*\d{1,3}\s*),(\s*\d{1,3}\s*),(\s*\d{1,3}\s*[^a-z])\)?/.test(arg)) {
      return convRgbToHex(arg);
    } else if (/#?\w{6}/.test(arg)) {
      return convHexToRgb(arg);
    }
  };

  return detectAndConvert(color);
};

