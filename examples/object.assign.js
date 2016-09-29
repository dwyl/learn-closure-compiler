var compile = require('google-closure-compiler-js').compile;

var flags = {
  jsCode: [{src: `
    var user = { name: 'Jack', email: 'jackiscuel@email.net' };
    var meta = { height: '185', eyes: 'blue', hair: 'blonde' };
    var social = { twitter: 'jackyboy', instagram: 'iamjack' };
    // and combine them into a _new_ object with Object.assign:
    var jack = Object.assign({}, user, meta, social);
  `}],
};
var out = compile(flags);
var filename = __filename.replace('.js', '.compiled.js');
var toSource = require('tosource'); // this is not a Standard! Using just for illustration purposes!
require('fs').writeFileSync(filename, toSource(out.compiledCode);
console.info(out.compiledCode);  // will print 'var x = 3;\n'
