let number = document.getElementById("num");
let b1= document.querySelector("#decr");
let b2= document.querySelector("#res");
let b3= document.querySelector("#inc");
let count =0;
b1.addEventListener("click",function(){
    count-=1;
    number.textContent=count;
    console.log(count);
})

b2.addEventListener("click",function(){
    count = 0;
    number.textContent=count;
    console.log(count);
})


b3.addEventListener("click",function(){
    count +=1;
    number.textContent=count;
    console.log(count);
})