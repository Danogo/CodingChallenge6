// Question 3: 
// Write a function that converts HEX to RGB. 
// Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB 
// and if you enter RGB color format it returns HEX.

// ==== Answer ====
const convertColors = color => {
  // function converting HEX values to decimal values
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

  // function converting RGB color to HEX color
  const convRgbToHex = colRgb => {
    // find all numbers consisted of 1, 2 or 3 digits and put them in array
    let rgbStrings =  colRgb.match(/\d{1,3}/g);
    // map through all rgb Strings, convert them to numbers and then convert them to corresponding hexadecimal values strings
    // if number needs only four last bits, add 0 to the beginning to maintaint proper format (#000000)
    let hexStrings = rgbStrings.map( stringNum => Number(stringNum).toString(16).length === 2 ? Number(stringNum).toString(16) : `0${Number(stringNum).toString(16)}`);
    // join all elements of an array to make one concise string.
    hexString = hexStrings.join('');
    // add # at the beginning and return HEX color string
    return `#${hexString}`;
  };

  return convHexToRgb(color);

};

