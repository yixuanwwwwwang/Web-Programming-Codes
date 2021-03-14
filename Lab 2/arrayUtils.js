//1

function mean (array) {
    let len = array.length
    if (len == 0) throw 'Error: Empty'
    if (!Array.isArray(array)) throw 'Error: not proper type'
    if (array == undefined) throw 'Error: parameter exists'
    let sum = 0
    for (let x of array) {
        if (typeof x != 'number') throw 'Error: element not a number'
        sum = x + sum
    }
    let m = sum / len
    return m
    
}



//2

function medianSquared (array) {
    let len = array.length
    if (array == undefined) throw 'Error: parameter exists'
    if (!Array.isArray(array)) throw 'Error: not proper type'
    if (len == 0) throw 'Error: empty'
    let sum = 0
    for (let x of array) {
        if (typeof x != 'number') throw 'Error: element not a number'
        sum = x + sum
    }
    
    if (len%2 == 0) {
        loc1 = len/2-1
        loc2 = len/2
        let median1 = (array[loc1]+array[loc2])/2
        let medianSquared  = median1 * median1
        return medianSquared
    } else {
        loc = (len/2).toFixed(0)
        let median2 = (array[loc])
        let medianSquared  = median2 * median2
        return medianSquared
    }

}




//3

function maxElement (array) {
    if (array == undefined) throw 'Error: parameter not exists'
    if (!Array.isArray(array)) throw 'Error: not proper type'
    if (array.length == 0) throw 'Error: empty'
    let max = array[0]
    let loc = 0
    for( let i = 0; i < array.length ; i++ ) {
        if (typeof array[i] !== 'number') throw 'Error: element not a number'
        if( array[i] > max ) {
            loc = i
            max = array[i]
            
        } 
    }
    let object = {}
    object[max] = loc
    return object  
}




//4

function fill (end, value) {
    if (end == undefined) throw 'Error: parameter not exists'
    if (typeof end !== 'number') throw 'Error: not a number'
    if (end%1 !== 0) throw 'Error: not a integer'
    if (end < 1) throw 'Error: not positive integer'
    let array = []
    if (value == undefined){
        for (let i = 0 ; i<end; i++){
            array.push(i)
        }
        return array
    }else {
        for (let i = 0 ; i<end; i++){
            array.push(value)
        }
        return array
    }
}


//5

function countRepeating (array) {
    if (array == undefined) throw 'Error: parameter not exists'
    if (!Array.isArray(array)) throw 'Error: not proper type'
    let object = {}
    for (let x of array) {
        
        if (typeof x !== 'string' && typeof x !== 'number') throw 'Error: element not a string or a number'
        
        if (object[x]){
            object[x]++;
        }else {
            object[x]=1;
        }
    }

    for (let y in object){
        if (object[y]<2){
            delete object[y]
        }   
    } 
    return object
}




//6

function isEqual(arrayOne,arrayTwo) {
    if (!Array.isArray(arrayOne)) throw 'Error: not proper type'
    if (!Array.isArray(arrayTwo)) throw 'Error: not proper type'
    if (arrayOne.length == 0) throw 'Error: empty'
    if (arrayTwo.length == 0) throw 'Error: empty'
    function sortArray (array) {
        for (let x of array) {
            if (Array.isArray(x)){
                x.sort()
            } else {
                array.sort()
            }
        }
        return array
    }
    let len1 = arrayOne.length
    let len2 = arrayTwo.length
    let a = []
    let b = []
    if (len1 != len2) {
        return false
    } else{
        a = sortArray(arrayOne)
        b = sortArray(arrayTwo)
        if (JSON.stringify(a) ===JSON.stringify(b)) {
            return true
        }
       }   
}



module.exports = {
    mean,medianSquared,maxElement,fill,countRepeating,isEqual
}