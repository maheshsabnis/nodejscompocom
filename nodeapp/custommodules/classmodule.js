export class Utility {
    reverseString(str){
        let res;
        for(let i=str.length; i >=0; i--) {
            res+= str[i];
        }
        return res;
    }

    changeCase(str,c){
        if(c === "U" || c === "u") return str.toUpperCase();
        if(c === "L" || c === "l") return str.toLowerCase();
        return str;
    }
}