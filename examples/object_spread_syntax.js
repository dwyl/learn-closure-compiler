var src = { src: `
	var user = { name: 'Jack', email: 'jackiscuel@email.net' };
	var meta = { height: '185', eyes: 'blue', hair: 'blonde' };
	var social = { twitter: 'jackyboy', instagram: 'iamjack' };
	// and combine them into a _new_ object with spread syntax:
	var jack = {...user, ...meta, ...social};
`};

var compile = require('google-closure-compiler-js').compile;

var flags = {
  jsCode: [src],
};
var out = compile(flags);
console.info(out); 
