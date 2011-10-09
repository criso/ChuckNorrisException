# ChuckNorrisException


![Chuck Norris](https://github.com/criso/ChuckNorrisException/blob/master/Chuck_Norris_Jedi_Master.jpg?raw=true)

## Installation via npm

    $ npm install ChuckNorrisException

## Usage

    var ChuckNorrisException = require('ChuckNorrisException');

    var imFeelingLucky = true;
    try {
      if (imFeelingLucky) throw new ChuckNorrisException();
    } catch (e) {
      // FAIL: You cannot catch a ChuckNorrisException
    }

## Wait.. wha....?
Attempting to throw a ChuckNorrisException will result in failure and will  
terminate your program. 

Why? Because, you don't throw Chuck Norris.. Chuck Norris throws __YOU__!

These handy errors will be shown if such foolishness is atempted

* You cannot throw Chuck Norris... Chuck Norris, throws YOU!
* Chuck Norris wrote Hello World once... it was called Unix
* Chuck Norris will asynchronously KICK YOUR ASS


## What we've learned here today
__You cannot catch a ChuckNorrisExecption__
