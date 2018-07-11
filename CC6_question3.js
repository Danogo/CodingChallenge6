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
  return convHexToRgb(color);
};