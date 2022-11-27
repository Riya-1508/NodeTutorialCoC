const {createReadStream} = require('fs')
//default 64kb
//last buffer - remainder
//highwatermark - control size
//const stream = createReadStream('./content/bigfile.txt',{highwatermark: 90000})
//const stream = createReadStream('./content/bigfile.txt',{encoding: 'utf8'})
const stream = createReadStream('./content/bigfile.txt',
{highwatermark:90000,
    encoding: 'utf8'})
stream.on('data',(result) => {
    console.log(result)
})
stream.on('error',(err) => console.log(err))