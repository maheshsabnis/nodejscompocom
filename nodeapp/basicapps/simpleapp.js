console.log('Hello Word of Node.js');
let names = ["Tejas","Mahesh", "Rameshrao","Ramrao"];

console.log(names);
for(let n of names){
    console.log(`Names =  ${n}`);
}

let res = names.filter((n,i)=>{
    return n.startsWith('R');
});
console.log(`Names starts with 'R' = ${res}`);

console.log(names.sort());
