
let str=prompt("Enter the sentance");


function reverseWord(str) {
    return str.split(" ").map(s=>{return s.split("").reverse().join("")}).join(" ");
    
}
let display = document.getElementById('a')
display.innerText=reverseWord(str)

console.log(reverseWord(str));
