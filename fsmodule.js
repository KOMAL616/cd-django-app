const { Console } = require('console');
const fs=require('fs');
//fs.readFile('file2.txt','utf8',(err, data)=>{
//    console.log(err, data);
//});
//console.log("Finished reading file");
//a=fs.readFileSync('file2.txt')
//console.log(a.toString());
//console.log("Finished reading file");
//fs.writeFile('file2.txt','This is s data', ()=>{
//    console.log("written to the file");
//});
//console.log("Finished reading file");
b=fs.writeFileSync('file2.txt',"This is komal")
console.log(b);
console.log("Finished reading file");