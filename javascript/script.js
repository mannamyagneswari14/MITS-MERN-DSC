// console.log("Hello World");
// var can be change  ,const cannot be change i must be intilized it on that time only,let cannot be intilized 
// var a;
// a=10;
// var a;
// a=30;
// let b=90;
// b=78;
// const c=09;
// console.log(a);
// console.log(b);
// console.log(c);
// var num=10;
// var str="yagna";//`` '' ""
// var bool=true;
// var un;
// var nu=null;
// var big=123454567774n;
// var symbol=Symbol('li');
// console.log(typeof num) 
// console.log(typeof str) 
// console.log(typeof bool) 
// console.log(typeof un) 
// console.log(typeof nu) 
// console.log(typeof big)
// console.log(typeof symbol)  

// var arr=[1,2,3,4,5]
// console.log(arr) 
// console.log(typeof arr) 

// var obj={
//     name:"yagna",
//     dept:"DS"
// }
// console.log(obj);
// console.log(typeof obj) 

//arith
// var a=10;
// var b="20";
// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a%b);
// console.log(a*b);
// console.log(a**b);

// //relational
// var a=10;
// var b="10";
// console.log(a==b);
// console.log(a===b);
// console.log(a!=b);
// console.log(a!==b);
// console.log(a<=b);
// console.log(a>=b);

// //control statement
// //conditional sta(if,if else,else if,switch)
// var a=10;
// if(a%2===0){
//     console.log("even");
// }

// if(a%2===0){
//     console.log(`${a} is even`);
// }
// else{
//     console.log(`${a} is odd`);
// }

// var mar=85;
// if(mar>90){
//     console.log("O Grade");
// }
// else if(mar>70){
//     console.log("A Grade");
// }
// else if(mar>35){
//     console.log("Pass");
// }
// else{
//     console.log("Fail");
// }
// //Ternary
// var a=5;
// const r=(a%2===0)? `${a} is Even`:`${a} is Odd`;
// console.log(r)

// var=80;
// const g=(m>90) ? "O grade":(m>70)?"A grade":(m>35) "pass" : "fail";
// console.log(g)


// let day = 3;
// let name;

// switch(day) {
//     case 1:
//         name = "Monday";
//         break;
//     case 2:
//         name = "Tuesday";
//         break;
//     case 3:
//         name = "Wednesday";
//         break;
//     case 4:
//         name = "Thursday";
//         break;
//     case 5:
//         name = "Friday";
//         break;
//     case 6:
//         name = "Saturday";
//         break;
//     case 7:
//         name = "Sunday";
//         break;
//     default:
//         name = "Invalid day";
// }

// console.log(name);

//looping sta
// var a=0;
// do{
//     console.log("Example Do while");
// }while(a!==0)

// Normal function
// function add(a,b){
//     console.log(a+b);
// }
// add(10,20);

//arrow function
// var add=()=>{
//     console.log("Arrow fun")
// }
// add();

// var add=(a,b)=>{
//     console.log(a+b)
// }
// add(10,20);

//callback fun
// var add=(a,b,demo)=>{
//     demo(a+b);
// }
// var r=(res)=>{
//     console.log(res);
// }
// add(10,20,r);

// //spread oprator
// var a=[1,2,3];
// var a2=[...a,4,5,6];
// console.log(a);
// console.log(a2);

// //Desrtucting operator
// var [m1,m2,m3,m4,m5]=[99,98,80,97,96];
// console.log(m1);
// console.log(m2);
// console.log(m3);
// console.log(m4);
// console.log(m5);

// var{name,age,dept,contact}={
//     name:"yagna",
//     age:20,
//     dept:["DS","CS"],
//     contact:{
//         mo:908599023,
//         mail:'yagna@gmail.com'
//     }
// }
// console.log(name);
// console.log(age);
// console.log(dept);
// console.log(contact);

// var a=[10,20,30,40];
// for(let i in a){
//     console.log(i,a[i]);
// }
// var ob={
//     name:"yagna",
//     age:20,
//     isActive:true
// }
// for(let key in ob){
//     console.log(key,ob[key]);
// }

// var a=[10,20,30,40];
// for(let val of  a){
//     console.log(val);
// }

// a.forEach((val,index)=>{
//     console.log(val,index);
// })

//hoisting
// console.log(a);
// var a=10;
// add();
// function add(){
//     console.log(10+20);
// }

// var a=10;
// if(true){
//     var b=20;
// }
// console.log(a);
// console.log(b);

