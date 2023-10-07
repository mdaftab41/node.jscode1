console.log('i am good boy');
//file system module  
const a = 3;//once assign a value then you don't change it
const fs = require("fs");

fs.copyFileSync("file1.txt","file2.txt");//you copy file1 one into file2
//fs.writeFileSync("read.txt","i am usiung write file module of node js ");//it create file if note present and write content in file if file is already present then then over write the content
fs.writeFileSync("read.txt","read file is alredy present then it simple replace the content  ");//read file is alredy present then it simple replace the content 
fs.appendFileSync("read.txt",", it simply add the content into present file hello brother i am using node js ");// it simply add the content into present file hello brother i am using node js
const buf_data= fs.readFileSync("read.txt");//node js use a additional data type called baffer(not avaiable in browzer javascript)
console.log(buf_data);//buffer is mainly use to store to store binary data,while reading from a file  or reciving package over a network 
org_data = buf_data.toString();//store buf(binary) data in to string
console.log(org_data);
fs.renameSync("read.txt","readWrite.txt");// use to rename file 