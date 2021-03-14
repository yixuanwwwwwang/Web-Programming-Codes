---

The purpose of this lab is to familiarize yourself with Node.js modules and further your understanding of JavaScript syntax.

In addition, you must have error checking for the arguments of all your functions. If an argument fails error checking, you should throw a string describing which argument was wrong, and what went wrong. You can read more about error handling on the MDN (Links to an external site.).

---

Initializing a Node.js Package
For all of the labs going forward, you will be creating Node.js packages, which have a package.json. To create a package, simply create a new folder and within that folder, run the command npm init. When it asks for a package name, name it cs-546-lab-2. You may leave the version as default and add a description if you wish. The entry file will be index.js.

All of the remaining fields are optional except author. For the author field, you must specify your first and last name, along with your CWID. In addition, You must also have a start script for your package, which will be invoked with npm start. You can set a start script within the scripts field of your package.json.


arrayUtils.js
This file will export 6 functions, each of which will pertain to arrays.

mean(array)
Returns the mean (Links to an external site.) value of the elements of an array

You must check:

That the array parameter exists (meaning the function has input at all)
The array parameter is of the proper type (meaning, it's an array)
The array is not empty.
Each array element is a number.

medianSquared(array)
Returns the median (Links to an external site.) value of the elements of an array squared. As the function name states.  It's the median squared, so you will first find the median and then square it!

You must check:

That the array parameter exists
The array parameter is of the proper type (meaning, it's an array)
The array is not empty
Each array element is a number
If any of those conditions fail, you will throw an error.


maxElement(array)
Scan the array from one end to the other to find the largest element. Return both the maximum element of the array and the index (position) of this element as a new object with the value as the key and the index as the value. 

You must check:

That the array parameter exists
The array parameter is of the proper type (meaning, it's an array)
The array is not empty
Each array element is a number
If any of those conditions fail, you will throw an error.

fill(end, value)
Creates a new numbered array starting at 0 increasing by one up to, but not including the end argument. The value argument is optional, but when specified each element will be set to that value. If the value argument is not supplied, you will fill the array with numbers as shown below in the examples. 

You must check that the end parameter exists
You must check that the end parameter is of proper type,
You must check that the end parameter is a positive integer greater than 0.
If any of those conditions fail, the function will throw.

countRepeating(array)
Will return an object with the count of each element that is repeating in the array.

Note: Order does not matter in a JavaScript object, so your answer may have a different ordering.

Note: in JavaScript, all object keys are coerced to strings. 


You must check:

That the array parameter exists
The array parameter is of the proper type (meaning, it's an array)
You must check that each element in the array is either a string or number (unless an empty array is provided)
If any of those conditions fail, the function will throw.

This function allows empty arrays.

If an empty array is passed in, just return an empty object {}.  

if there are no repeating elements, just return an empty object {}.

If the element's value is a number and there is a string value of that same number in the array, you can count that as a repeating element. This is because you cannot have a key in the object as the number 7 and another key "7" as they are considered the same like the above example. 

If it's a string, it's case sensitive. 

Note that,

7 and '7' are counted as 2
Hello, Hello, hello are counted as 2 


isEqual(arrayOne, arrayTwo)
Given two arrays,   check if they are equal in terms of size. Next you will sort them first (however you like, as long as they are both sorted the same way) and then check the elements to see if they are equal. and return a boolean. 

You must check:

That the array parameter exists
Each array parameter is of the proper type (meaning it's an array)
This function allows empty arrays. You must also take into account if it's an array of arrays!!!!  You will not have to worry about if the elements are objects or functions.  We will not test with objects or functions as elements for this function, however, you should test with all the other data types, boolean, number, string, undefined, null etc..

If any of those conditions fails, the function will throw.


stringUtils.js
This file will export 3 functions, each are useful functions when dealing with strings in JavaScript.

camelCase(string)
Given a string, you will construct a camel case version of the string, based on the spaces in words in the string

You must check:

That the string parameter exists
The length of the string parameter is greater than 0
The string parameter is of the proper type
That the string parameter is not just empty spaces
If any of those conditions fail, the function will throw.


replaceChar(string)
Given string you will replace any characters in the string  that are the same as the starting character but appear after the starting character (so not including the starting character) with alternating * and $ characters.  

Also, it is not case sensitive as shown in the examples below. 

That the string  parameter exists
The length of the string parameter is greater than 0
The string parameter is of the proper type
That the string  parameter is not just empty spaces
If any of those conditions fail, the function will throw.


mashUp(string1, string2)
Given string1 and string2 return the concatenation of the two strings, separated by a space  and swapping the first 2 characters of each. 

You must check:

That both the string1 and string2 parameters exist
That both the string1 and string2 parameters are of the proper type
The length of the string1 and string2 parameters contain at least 2 characters each.
That the string1 and string2 parameters are not just empty spaces
If any of those conditions fail, the function will throw.

objUtils.js
This file will export methods that are useful when dealing with objects in JavaScript.

makeArrays([objects])
This method will take in an array of objects , and will return an array of arrays where an array of each key and value is an element in the array. 


isDeepEqual(obj1, obj2)
This method check each field (at every level deep) in obj1 and obj2 for equality. It will return true if each field is equal, and false if not.


You must check that each argument is provided
You must check that each argument is an object. 
If any of those conditions fail, the function will throw.

Empty objects are valid as shown in the last example above. 

Hint: You will need to use recursion.  

Remember: The order of the keys is not important so: {a: 2, b: 4} is equal to {b: 4, a: 2}

computeObject(object, func)
Given an object that has numbers as values as the first input parameter and a function as the second input parameter, evaluate the function on the values of the object and return a new object.

You must check that the first input parameter is an object
You must check that the object has at least one key/value
You must make sure that all values for each key in the object are numbers.
You must make sure that the second parameter is a function.
If any of those conditions fail, you will throw an error. 

Testing
In your index.js file, you must import all the modules you created above and create one passing and one failing test case for each function in each module. So you will have a total of 24 function calls (there are 12 total functions)

