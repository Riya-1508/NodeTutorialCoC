//npm --version
// local dependency - use it only in this particular project
// npm i <package name>

//global dependency - use it any project
//npm install -g <package name>

//package.json - manifest file(store info about package/project
//manual approach (center package.json in the root,create properties etc)
//npm init (step by step,press enter to skip)
//npm i -y(everything default)
const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const split = _.flattenDeep(items)
console.log(split)
console.log('Hello World')