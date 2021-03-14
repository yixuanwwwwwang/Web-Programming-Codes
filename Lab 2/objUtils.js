//1

function makeArrays(objects) {
    if (!Array.isArray(objects)) throw 'Error: not proper type'
    if (objects.length <2) throw 'Error: elements not at least 2'
    let array = []
    for (x of objects){
        if (typeof x !== 'object') throw 'Error: element not an object'
        if ( x == {}) throw 'Error'
        let arr = Object.entries(x)
        array = array.concat(arr)
    }
    return array
}




// 2

function isDeepEqual (obj1, obj2) {
    
    if (obj1 == undefined || obj2 == undefined) throw 'Error: parameter not exists'
    if (typeof obj1 !== 'object' && typeof obj2 !== 'object') throw 'Error: not proper type'
    
    function isEqualEqual (obj1, obj2) {

        if (typeof obj1 !== 'object' || typeof obj2 !== 'object'){
            if (obj1 === obj2) {
                return true
            }
            else if (obj1 !== obj2) {
                return false
            }
        }
        let x1 = Object.getOwnPropertyNames(obj1)
        let x2 = Object.getOwnPropertyNames(obj2)
        if (x1.length !== x2.length) {
            return false} 
        for (let key in obj1) {
            
            if (obj2.hasOwnProperty(key)){
                if (!isEqualEqual(obj1[key],obj2[key])){
                    return false
                }
            }else {
                return false
            }
        } return true   
         
    }
    
    return isEqualEqual (obj1, obj2)
    
}




//3

function computeObject(object,func) {
    
    if (typeof object !== 'object') throw 'Error: not proper type'
    if (Object.keys(object).length <1 ) throw 'Error: object does not have at least one key/value'
    if (typeof func !== 'function') throw 'Error: second parameter not a function'

    
    let value = 0

    for (let x in object) {
        let n = object[x]
        if (typeof n !== 'number') throw 'Error'
        function function1(n) {
            value  = func(n)
            return value
        }
        let y = function1(n)
        object[x] = y   
    }

    return object
}



module.exports = {
    makeArrays, isDeepEqual, computeObject
}