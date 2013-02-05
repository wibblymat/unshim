(function(window){
	'use strict';
	// Prefixed names on window
	// Happens first so we can use ES5 features :)
	Object.getOwnPropertyNames(window).filter(function(name) {
		return name.slice(0, 6) === 'webkit';
	}).map(function(name) {
		window[name] = error('window.' + name);
	});

	var error = function(name) {
		return function() {
			throw new Error('Tried to call "' + name + '"');
		};
	};

	// ES5 features. I used http://kangax.github.com/es5-compat-table/ to see what to remove
	Object.create = error('Object.create');
	Object.defineProperty = error('Object.defineProperty');
	Object.defineProperties = error('Object.defineProperties');
	Object.getPrototypeOf = error('Object.getPrototypeOf');
	Object.keys = error('Object.keys');
	Object.seal = error('Object.seal');
	Object.freeze = error('Object.freeze');
	Object.preventExtensions = error('Object.preventExtensions');
	Object.isSealed = error('Object.isSealed');
	Object.isFrozen = error('Object.isFrozen');
	Object.isExtensible = error('Object.isExtensible');
	Object.getOwnPropertyNames = error('Object.getOwnPropertyNames');
	Date.prototype.toISOString = error('Date.prototype.toISOString');
	Date.now = error('Date.now');
	Array.isArray = error('Array.isArray');
	Function.prototype.bind = error('Function.prototype.bind');
	String.prototype.trim = error('String.prototype.trim');
	Array.prototype.indexOf = error('Array.prototype.indexOf');
	Array.prototype.lastIndexOf = error('Array.prototype.lastIndexOf');
	Array.prototype.every = error('Array.prototype.every');
	Array.prototype.some = error('Array.prototype.some');
	Array.prototype.forEach = error('Array.prototype.forEach');
	Array.prototype.map = error('Array.prototype.map');
	Array.prototype.filter = error('Array.prototype.filter');
	Array.prototype.reduce = error('Array.prototype.reduce');
	Array.prototype.reduceRight = error('Array.prototype.reduceRight');

	// Cherry picked some HTML5 features from http://html5test.com/compare/browser/ie08.html
	window.ArrayBuffer = error('window.ArrayBuffer');
	window.Int8Array = error('window.Int8Array');
	window.Uint8Array = error('window.Uint8Array');
	window.Int16Array = error('window.Int16Array');
	window.Uint16Array = error('window.Uint16Array');
	window.Int32Array = error('window.Int32Array');
	window.Uint32Array = error('window.Uint32Array');
	window.Float32Array = error('window.Float32Array');
	window.Float64Array = error('window.Float64Array');
	window.DataView = error('window.DataView');

	window.File = error('window.File');
	window.FileReader = error('window.FileReader');
	window.FileWriter = error('window.FileWriter');
	window.FileSystem = error('window.FileSystem');
	window.BlobBuilder = error('window.BlobBuilder');
	window.BlobURL = error('window.BlobURL');

	window.IDBFactory = error('window.IDBFactory');
	window.IDBCursor = error('window.IDBCursor');
	window.IDBCursorWithValue = error('window.IDBCursorWithValue');
	window.IDBDatabase = error('window.IDBDatabase');
	window.IDBIndex = error('window.IDBIndex');
	window.IDBKeyRange = error('window.IDBKeyRange');
	window.IDBObjectStore = error('window.IDBObjectStore');
	window.IDBOpenDBRequest = error('window.IDBOpenDBRequest');
	window.IDBRequest = error('window.IDBRequest');
	window.IDBTransaction = error('window.IDBTransaction');
	window.IDBVersionChangeEvent = error('window.IDBVersionChangeEvent');
})(this);
