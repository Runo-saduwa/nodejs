# CommonJS vs ESM (EcmaScript Modules): A Note

By default, Node.js treats each file as a CommonJS Module

which means that to export a export a function from a module you must use the `module.exports = {}` statement and to use that function in another module you must use the `const xxxx = require('./file')` pattern.

But to switch to ESM, you'll have to explicitly state set `"type": "module"` in your package.json file or use the `.mjs` file extention to successfully load ES Modules in Node.js. Also note that if you set the extension to `.mjs` you have to also add it to the import statements like so: `import xxxx from 'xxxx.mjs` and your export statements will change to `export {}`
