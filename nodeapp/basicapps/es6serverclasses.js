class MathClass {
    add(x,y){
        return parseInt(x) + parseInt(y);
    }
    mult(x,y){
        return parseInt(x) * parseInt(y);
    }
}

let obj =  new MathClass();
console.log(`Add = ${obj.add(10,20)}`);
console.log(`Mult = ${obj.mult(10,20)}`);