#Unshim - lowest common denominator JavaScript testing#

##WTF?##

If you're a fan of modern JavaScript you're probably pretty used to using fancy new ES5 features like Object.create and [].map. Unfortunately, it easy to forget that these features are new and try to use them in code that is meant to work in older browsers.

The unshim script removes support for ES5 and HTML5 APIs that wont work on IE8 so that your tests will break if you use them. By including the script in your test framework you can check if you have accidentally used unsupported functions, even when you test in a modern browser.

##Who is it for?##

Right now this is targetted specifically at people who want IE8 compatibilty and are testing with PhantomJS. This is purely because it is my own use case. It will not remove features that are in IE8 or that are *not* in PhantomJS 1.8. It's also not very well tested and probably a really stupid idea.

##So this makes your browser work just like IE8?##

No. It just removes some JavaScript functions. You will still have to test in all of the browsers you intend to support, this is just a smoke test. There are plenty of things like CSS properties or layout algorithms that I don't know of a way to change.

##I loaded the script in Chrome and now the console doesn't work properly##

Yep.

##License##
© Mat Scales. Released with the [MIT License](http://en.wikipedia.org/wiki/MIT_License)
