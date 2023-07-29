/* What will the code below output to the console and why?*/

var arr1 = "john".split(''); // arr1 = ['j', 'o', 'h', 'n']

var arr2 = arr1.reverse(); //  arr1 = ['n', 'h', 'o', 'j']

var arr3 = "jones".split('');  // arr3 = ['j', 'o', 'n', 'e', 's']

arr2.push(arr3); // arr2 = ['n', 'h', 'o', 'j', ['j', 'o', 'n', 'e', 's']]

console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));

console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));


/* explanation
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));

arr1.length: The length of arr1 is 5 because the reverse() method modifies the array in place, so arr1 now contains ['n', 'h', 'o', 'j', ['j', 'o', 'n', 'e', 's']].
arr1.slice(-1): This takes the last element of arr1, which is the array arr3 ['j', 'o', 'n', 'e', 's'].
The output will be: array 1: length=5 last=j,o,n,e,s
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

arr2.length: The length of arr2 is 5, as it is the same array as arr1.
arr2.slice(-1): This takes the last element of arr2, which is also the array arr3 ['j', 'o', 'n', 'e', 's'].
The output will be: array 2: length=5 last=j,o,n,e,s
*/