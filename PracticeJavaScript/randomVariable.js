"use strict";
const ps=require("prompt-sync");
const prompt = ps({sigint:true});
prompt("Enter your Name : ");
prompt("Enter their name : ");
let random = Math.random();
let persentage=Math.floor((random * 100)+1);
console.log("Love persentage : "+persentage+"%");
