# ChuckNorrisException

This will throw an un-catchable error and make your code fail in style!  
When in doubt, __throw__ a [ChuckNorrisException](http://criso.github.com/ChuckNorrisException/)!

![GitHub Logo](https://github.com/criso/ChuckNorrisException/blob/master/Chuck_Norris_Jedi_Master.jpg?raw=true)


## Installation via npm

    $ npm install ChuckNorrisException

## Usage

```js
var ChuckNorrisException = require('ChuckNorrisException');

var imFeelingLucky = true;
try {
  if (imFeelingLucky) throw new ChuckNorrisException();
} catch (e) {
  // FAIL: You cannot catch a ChuckNorrisException
}
```

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

## License

(The MIT License)

Copyright (c) 2011 Cristiano Oliveira &lt;ocean.cris@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

