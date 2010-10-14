# Introduction

node-browscap is a port of PHP's get_browser function to node.js

It makes available a `getBrowser` function which takes a browser user agent string 
and returns an associative array of properties and abilities of that browser.

You must provide a browscap.ini file, which you can get here:

http://browsers.garykeith.com/downloads.asp

Both the browscap.ini or php_browscap.ini files should work.

Example:

	var browscap = require('browscap');
	browscap.setIni('./browscap.ini');

	var browser = browscap.getBrowser("Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; WinTSI 05.11.2009)");

	//Will print "IE 8.0"
	console.log(browser['Browser'] + " " + browser['Version']);

Thanks to [torvalamo](http://github.com/torvalamo) for some rewrites to 
improve performance.

# Installation

Using npm run `npm install browscap`

You can get npm from http://npmjs.org/

Alternatively you can checkout the git repository

# Examples

There is a test.js file which demonstrates how to use node-browscap and tests
several user agents.

To run:

	$ node test.js

# License

Copyright 2010 Dan Grossman. All rights reserved.
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE. 
