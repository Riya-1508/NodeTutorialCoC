const Eventemitter = require('events');

const customEmitter = new Eventemitter()
customEmitter.on('response',(name,id)=>{
    console.log(`data received is a name ${name} with id ${id}`)
})
customEmitter.emit('response','Riya','211081060')
customEmitter.on('response',()=>{
    console.log(`some other logic used here`)
})
