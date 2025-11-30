/*function myFunction(){
    console.log("Welcome to apna ghar");
    console.log("We are learning JS");
}
myFunction();*/


/*function myFunction(msg){
    console.log(msg);
}
 myFunction("I love javascript");*/


 /*function sum(x,y){
    s = x+y;
    return s;
 }
 let val = sum(3,4);
 console.log(val);*/

/*function countVowels(str){
    let count = 0;
    for (const char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            count++;
        }
    }
    console.log(count);
}*/

//for each in array

/*let arr = ["pune","dehli","mumbai"];
arr.forEach((val)=>{
console.log(val.toUpperCase());
});*/

let arr = ["pune","dehli","mumbai"];
arr.forEach((val,idx,arr)=>{
console.log(val.toUpperCase(),idx,arr);
});
