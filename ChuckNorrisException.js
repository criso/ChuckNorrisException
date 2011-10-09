var colors = {
  "red":      ['\033[31m', '\033[39m'],
  "yellow":   ['\033[33m', '\033[39m'],
  'inverse':  ['\033[7m',  '\033[27m']
};

function colorize(str, color) {
  return colors[color][0] + str + colors[color][1];
}

var messages = [
    "You cannot throw Chuck Norris... Chuck Norris, throws YOU!"
  , "Chuck Norris wrote Hello World once... it was called Unix"
  , "Chuck Norris will asynchronously KICK YOUR ASS"
];

var errMessage   = messages[Math.floor(Math.random()* messages.length+1)]
  , chuckMessage = colorize( colorize(errMessage, "red"), "inverse");

function ChuckNorrisException(msg) {
  msg = msg || "";
  if (!ChuckNorrisException.thrown) {
    ChuckNorrisException.thrown = true;
    process.nextTick(function(){
      ChuckNorrisException.thrown = false;
      throw new Error(chuckMessage + "\n" + colorize(msg, "yellow"));
    });
  }
}

ChuckNorrisException.thrown                = false;
ChuckNorrisException.prototype             = new Error();
ChuckNorrisException.prototype.constructor = ChuckNorrisException;

module.exports = ChuckNorrisException;
