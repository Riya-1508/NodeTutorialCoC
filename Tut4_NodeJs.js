/*const amount = 0
if(amount<10)
{
    console.log('small number')
}
else {
    console.log('large number')
}
console.log(`this is my first node app`)*/
//GLOBALS - NO WINDOW !!!

//__dirname - path to the current directory
//__filename - file name
//require - function to use modules (CommonJS)
//module - info about current module (file)
//process - info about env where the program is being executed
console.log(__dirname)
setInterval(() => {
    console.log('hello peeps')
},1000)