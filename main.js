/*
 highr order function ... the higher order function is function that accept
 function as a parameter and can return function.
 (map)   (filter)   (reduce)    (forEach)
 map / is a higher order function that accept two parameter 
 the first is call back function that accept three parameter (element , index , array)
 the second is this argument
 some example about map.s
 an example to add each element of array on itself.
 */
let arrnumber=[10,20,30,40,50];
let newarray=[];
for(let i=0;i<arrnumber.length;i++){
  newarray.push(arrnumber[i] + arrnumber[i]);
}
console.log(newarray);
// using map
let newarray2=arrnumber.map(function(ele,index,array){
  console.log(ele);
  console.log(index);
  console.log(array);
  console.log(ele + ele)
  console.log("#".repeat(10));
  return ele + ele;
},10)
console.log(newarray2);
function addtion(ele){
  return ele + ele 
}
let fff= arrnumber.map(addtion);
console.log(fff);
// sweap word
let wo="ELzerO";
let ope=wo.split("").map((ele)=>{
  return ele===ele.toUpperCase()? ele.toLowerCase():ele.toUpperCase();
},`thisargument`).join("");
console.log(ope);
// convert number
let nm=[10,20,30,-40,-50,-100];
let mn=nm.map(function(ele,index,array){
  return -ele;
})
console.log(mn);
//ignore number value
let po="elz123456789ro";
let newpo=po.split("").map((ele)=> isNaN(parseInt(ele))? ele:""
,`thisargument`).join("");
console.log(newpo);
// filter is like mao but it is different from map in using
// like filter using when the user need to filter the data and return what user need
// the structure for filter is (call back function(element , index, array),thisargument)
// some example using filter
// to return even numbers two different way
// using for loop
let jjj=[1,2,3,4,5,6,7,8,9,10];
let newjjj=[];
for(let i=0;i<jjj.length;i++){
  if(jjj[i] % 2 !==0){
    continue;
  }
  newjjj+=jjj[i] + "!";
}
console.log(newjjj);
// using filter
let filterjjj=jjj.filter(function(ele,index,array){
  return ele %2 === 0;
},10)
console.log(filterjjj);
// example on filter
let talk=["anwar","kareem","belal","fayza","tarek","ashor","aser"];
let yyyyy=talk.filter(function(ele,index,array){
  return ele.startsWith("a");
},50);
console.log(yyyyy);
// example on filter
let sentence="i love foood code to playing much";
let newsentence=sentence.split(" ").filter(function(ele,index,array){
  return ele.length <= 4;
},3).join(" ");
console.log(newsentence);
// example on filter
let fil="elz123ro";
let newfil=fil.split("").filter((ele,index,array)=>{
  return isNaN(parseInt(ele));
},5)
console.log(newfil.join(""));
//example on map width filter
let mixv="a123mnkj";
let newmix=mixv.split("").filter((ele,i,arr)=>{
  return !isNaN(parseInt(ele))
},6).reduce((accumlator,current,index,array)=>{
 return (accumlator) * (current);
},9);
console.log(newmix);
// reduce is used when needing result from operation 
// srtucture is reduce(call back function(accumlator,current,index,array),initialvalue);
let numm=[10,20,30,40,50,60,70,80,90,100];
let newnumm=numm.reduce((acc,cur,i,arr)=>{
  console.log(acc);
  console.log(cur);
  console.log(i);
  console.log(arr);
  console.log(acc+cur);
  console.log("###########################");
  return acc+ cur;
})
console.log(newnumm)
// example on reduce
let yu=["e","@","l","@","@","z","e","r","@","o"];
let newyu=yu.filter((ele,i,arr)=>{
  return ele!=="@";
}).reduce((acc,cur,i,arr)=>{
  return `${acc}${cur}`;
});
console.log(newyu);
//example on reduce
let big=["other","bla","propaganda","uuu","playing"];
let newbig=big.reduce(function(acc,cur,i,arr){
  return acc.length>cur.length ? acc : cur;
})
console.log(newbig);
