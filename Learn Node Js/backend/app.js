// let n=5;

// for(let i=0;i<n;i++){
//     console.log("hello ",i);
// }
// console.log(process.argv);

// let args=process.argv;

// for(let i=2;i<args.length;i++){
//     console.log("welcome",args[i])

//get the value from math.js

// let n=5;
// for(let i=0;i<n;i++){
//     console.log("hello ",i);
// }
// console.log(process.argv);
// let args=process.argv;
// for(let i=2;i<args.length;i++){
//     console.log("welcome",args[i])
//get the value from math.js
// const math=require("./math");
// console.log(math.sum(2,2));
//console.log(math.PI)

// const info=require("./fruits"); //require whole directory
// console.log(info[0].name); 

// const figlet = require('figlet');

// figlet("RAMBHAKTA", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// import {sum,PI} from "./math.js";
import {generate} from "random-words"
// console.log(sum(1,2));
// console.log("Hi I am Rambhakta Pandey")
console.log(generate());