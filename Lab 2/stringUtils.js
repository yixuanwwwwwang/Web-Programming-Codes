//1

function camelCase(string){
    if (string == "") throw 'Error: empty'
    if (string.length < 0 ) throw 'Error: parameter is not greater than 0'
    if (typeof string !== 'string') throw 'Error: not proper type'
    if (string == undefined) throw 'Error: parameter not exists'
    let split=string.split(' ');
    for(let i=1;i<split.length;i++){
        split[i]=split[i].charAt(0).toUpperCase()+split[i].substring(1);
    }
    let returnValue = split.join('')
    return returnValue
}




//2

function replaceChar(string) {
    if (string == "") throw 'Error: empty'
    if (string.length < 0 ) throw 'Error: length is not greater than 0'
    if (typeof string !== 'string') throw 'Error: not proper type'
    if (string == undefined) throw 'Error: paramter exists'
    let a = 0
    let x = string.charAt(0)
    for (let i=1; i<string.length; i++){
        
        if (string.charAt(i).toLowerCase() == string.charAt(0).toLowerCase()) {
            a = a + 1
            if (a%2 !== 0) {
                x = x + "*"
            } else {
                x = x + "$"
            }
        }else {
            x = x + string.substring(i,i+1)
            
        }
        
    }
    return x
}



//3

function mashUp(string1, string2) {
    if (string1 == "" || string2 == "" ) throw 'Error: empty'
    if (string1.length < 2 || string2.length < 2 ) throw 'Error: length is not at least 2'
    if (typeof string1 !== 'string' || typeof string2 !== 'string'  ) throw 'Error: not proper type'
    if (typeof string1 == undefined || typeof string2 == undefined  ) throw 'Error: parameter not exists'
    
    let s1First = string1.substring(0,2)
    let s2First = string2.substring(0,2)
    let s1End = string1.substring(2,string1.length)
    let s2End = string2.substring(2,string2.length)
    let newString = s2First + s1End + " " + s1First +s2End
    return newString
}

console.log(mashUp("Patrick", "Hill"))



module.exports = {
    camelCase, replaceChar, mashUp
}