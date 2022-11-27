const fs = require("fs");
let text = fs.readFileSync("riya.txt","utf-8");
text = text.replace("browser","website");
console.log("The content of file is : ")
console.log(text)
console.log("Creating new file : ")
fs.writeFileSync("riya1.txt",text)