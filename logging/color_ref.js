/*
Author: Sean Kelly
Description: use to change the colors of console.log statements
*/

// foreground colors;
const BLACK = "\x1b[30m";
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const BLUE  = "\x1b[34m"
const MAGENTA = "\x1b[35m";
const CYAN = "\x1b[36m";
const WHITE = "\x1b[37m";

// background colors

const BLACK_BG = "\x1b[40m";
const RED_BG  = "\x1b[41m";
const GREEN_BG = "\x1b[42m";
const YELLOW_BG = "\x1b[43m";
const BLUE_BG = "\x1b[44m";
const MAGENTA_BG = "\x1b[45m";
const CYAN_BG = "\x1b[46m";
const WHITE_BG = "\x1b[47m";

module.exports = {
  black: BLACK,
  red: RED,
  green: GREEN,
  yellow: YELLOW,
  blue: BLUE,
  magenta: MAGENTA,
  cyan: CYAN,
  white: WHITE
 }
