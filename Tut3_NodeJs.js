//Synchronous Blocking
//--line by line execution
//Asynchronous Blocking
 //--line by line execution not guaranteed
 const os = require('os')
 //info about current user
 const user = os.userInfo()
 console.log(user)
 //method returns the system uptime in seconds
 console.log(`The system uptime is ${os.uptime()} seconds`)
 const current =
 {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
 }
 console.log(current)