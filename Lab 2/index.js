const arrayUtils = require('./arrayUtils')
////////////////////    1   mean
try {
    // Should Pass
    console.log(arrayUtils.mean([1,2,3]))
    console.log('mean passed successfully');
 } catch (e) {
    // console.log(e)
    console.error('mean failed test case');
 }
 try {
    // Should Fail
    console.log(arrayUtils.mean([1,'f',3]))
    console.error('mean did not error');
 } catch (e) {
    // console.log(e)
    console.log('mean failed successfully');
 }

////////////////////    2   median
 try {
    // Should Pass
    console.log(arrayUtils.medianSquared([1,4,3]))
    console.log('median passed successfully');
 } catch (e) {
    // console.log(e)
    console.error('median failed test case');
 }
 try {
    // Should Fail
    console.log(arrayUtils.medianSquared([1,'f',3]))
    console.error('median did not error');
 } catch (e) {
    // console.log(e)
    console.log('median failed successfully');
 }

////////////////////    3   maxElement
 try {
    // Should Pass
    console.log(arrayUtils.maxElement([1,4,3]))
    console.log('maxElement passed successfully');
 } catch (e) {
    // console.log(e)
    console.error('maxElement failed test case');
 }
 try {
    // Should Fail
    console.log(arrayUtils.maxElement([1,'f',3]))
    console.error('maxElement did not error');
 } catch (e) {
    // console.log(e)
    console.log('maxElement failed successfully');
 }

 ////////////////////    4   fill
 try {
    // Should Pass
    console.log(arrayUtils.fill(20))
    console.log('fill passed successfully');
 } catch (e) {
    // console.log(e)
    console.error('fill failed test case');
 }
 try {
    // Should Fail
    console.log(arrayUtils.fill(0))
    console.error('fill did not error');
 } catch (e) {
    // console.log(e)
    console.log('fill failed successfully');
 }

  ////////////////////    5   countRepeating
 try {
    // Should Pass
    console.log(arrayUtils.countRepeating(['7',7, 13, "Hello","Hello", "hello"]))
    console.log('countRepeating passed successfully');
 } catch (e) {
    // console.log(e)
    console.error('countRepeating failed test case');
 }
 try {
    // Should Fail
    console.log(arrayUtils.countRepeating([undefined,true]))
    console.error('countRepeating did not error');
 } catch (e) {
    // console.log(e)
    console.log('countRepeating failed successfully');
 }

   ////////////////////    6   isEqual
try {
    // Should Pass
    console.log(arrayUtils.isEqual([ 'Z', 'R', 'B', 'C', 'A' ], ['R', 'B', 'C', 'A', 'Z']))
    console.log('isEqual passed successfully');
 } catch (e) {
    // console.log(e)
    console.error('isEqual failed test case');
 }
 try {
    // Should Fail
    console.log(arrayUtils.isEqual([], []))
    console.error('isEqual did not error');
 } catch (e) {
    // console.log(e)
    console.log('isEqual failed successfully');
 }




const stringUtils = require('./stringUtils')

////////////////////    1   camelCase
try {
    // Should Pass
    console.log(stringUtils.camelCase('PATRICK HILL'))
    console.log('camelCase passed successfully');
 } catch (e) {
    // console.log(e)
    console.error('camelCase failed test case');
 }
//  try {
//     // Should Fail
//     console.log(stringUtils.camelCase(["Hello", "World"]))
//     console.error('camelCase did not error');
//  } catch (e) {
//     // console.log(e)
//     console.log('camelCase failed successfully');
//  }

// ////////////////////    2   replaceChar
// try {
//     // Should Pass
//     console.log(stringUtils.replaceChar("Mommmmmy hahahahammmmmmm mommy Mommy"))
//     console.log('replaceChar passed successfully');
//  } catch (e) {
//     // console.log(e)
//     console.error('replaceChar failed test case');
//  }
//  try {
//     // Should Fail
//     console.log(stringUtils.replaceChar(123))
//     console.error('replaceChar did not error');
//  } catch (e) {
//     // console.log(e)
//     console.log('replaceChar failed successfully');
//  }

// ////////////////////    3   mashUp
// try {
//     // Should Pass
//     console.log(stringUtils.mashUp("Patrick", "Hill"))
//     console.log('mashUp passed successfully');
//  } catch (e) {
//     // console.log(e)
//     console.error('mashUp failed test case');
//  }
//  try {
//     // Should Fail
//     console.log(stringUtils.mashUp ("h","e"))
//     console.error('mashUp did not error');
//  } catch (e) {
//     // console.log(e)
//     console.log('mashUp failed successfully');
//  }


//  const objUtils = require('./objUtils')

//  ////////////////////    1   mashUp
// try {
//     // Should Pass
//     console.log(objUtils.makeArrays([{ x: 0, y: 9, q: 10 }, { a: 70, x: 4, z: 5 }]))
//     console.log('makeArrays passed successfully');
//  } catch (e) {
//     // console.log(e)
//     console.error('makeArrays failed test case');
//  }
//  try {
//     // Should Fail
//     console.log(objUtils.makeArrays({ x: 0, y: 9, q: 10 }, { a: 70, x: 4, z: 5 }))
//     console.error('makeArrays did not error');
//  } catch (e) {
//     // console.log(e)
//     console.log('makeArrays failed successfully');
//  }

//  ////////////////////    2   isDeepEqual
// try {
//     // Should Pass
//     console.log(objUtils.isDeepEqual({a: {sA: "Hello", sB: "There", sC: "Class"}, b: 7, c: true, d: "Test"}, {c: true, b: 7, d: "Test", a: {sB: "There", sC: "Class", sA: "Hello"}}))
//     console.log('isDeepEqual passed successfully');
//  } catch (e) {
//     // console.log(e)
//     console.error('isDeepEqual failed test case');
//  }
//  try {
//     // Should Fail
//     console.log(objUtils.isDeepEqual(1,2,3,4,5))
//     console.error('isDeepEqual did not error');
//  } catch (e) {
//     // console.log(e)
//     console.log('isDeepEqual failed successfully');
//  }

//   ////////////////////    3   computeObject
// try {
//     // Should Pass
//     console.log(objUtils.computeObject({ a: 3, b: 7, c: 5 }, n => n * 2))
//     console.log('computeObject passed successfully');
//  } catch (e) {
//     // console.log(e)
//     console.error('computeObject failed test case');
//  }
//  try {
//     // Should Fail
//     console.log(objUtils.computeObject({ a: 3, b: 7, c: 5 }, undefined ))
//     console.log(objUtils.func)
//     console.error('computeObject did not error');
//  } catch (e) {
//     // console.log(e)
//     console.log('computeObject failed successfully');
//  }