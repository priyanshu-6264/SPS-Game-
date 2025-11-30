/*for of loop

let str = "Javascript";
let size = 0;
for (let i of str){
    console.log("i=",i);
    size++;
}
console.log("string size = ", size);*/


/*for in loop 
let student =  {
  name: "Priyanshu Lowanshi",
  age: 20,
  cgpa: 7.03,
  isPass: true,
};
for(let i in student){
    console.log("i=", i, "value=",student[i]);
}*/

//Practice Question 1
/*Even number 
for(let num=0; num<=100; num++){
    if(num%2===0){
        console.log(num);
    }
}
*/
/*Odd number
for(let num=0; num<=100; num++){
    if(num%2!==0){
        console.log(num);
    }
}*/ 

//Practice Question 2
/*let gamenum = 25;
let usernum = prompt("Guess the gmar number : ");
while (usernum != gamenum){
    usernum = prompt("you enterd a wrong number guess again : ");

}
console.log("congratulations you entered the right number");*/

//Prectice Q = Prompt the user to enter thire full name. Genrate a username for th,e based on the input. 
//Start username with @ followed by their full name and ending with the fillnme length.

let fullname = prompt("enter your full name withoout spaces");
let username = "@" + fullname + fullname.length;
console.log(username);
