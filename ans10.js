/* What will the following code's output be in sequence and explain why? */
function printNumber(num) {

  console.log(num);

}


console.log(1);


setTimeout(printNumber, 0, 2);


setTimeout(printNumber, 100, 3);


console.log(4);

/* Explanation:

console.log(1);: This line is a synchronous operation, so it will be executed first, logging 1 to the console.

setTimeout(printNumber, 0, 2);: This schedules the printNumber function to be executed after a delay of 0 milliseconds (which means as soon as possible) with an argument of 2. Note that setTimeout is an asynchronous operation, so it won't block the execution of the code, and the rest of the code will continue running.

setTimeout(printNumber, 100, 3);: This schedules the printNumber function to be executed after a delay of 100 milliseconds with an argument of 3. Since there's a slight delay of 100 milliseconds, this setTimeout operation will be executed after the next synchronous operation.

console.log(4);: This line is another synchronous operation, so it will be executed after console.log(1);. It logs 4 to the console.

Now, let's see the sequence of events:

console.log(1); is executed, and 1 is logged to the console.

setTimeout(printNumber, 0, 2); schedules the printNumber function to be executed with an argument of 2. However, it does not execute immediately, as there's a slight delay introduced by the event loop.

console.log(4); is executed, and 4 is logged to the console.

After a minimal delay, the event loop is free, and the first setTimeout(printNumber, 0, 2); operation is picked up. The printNumber function is executed with an argument of 2, logging 2 to the console.

After a 100-millisecond delay from the second setTimeout(printNumber, 100, 3); operation, the printNumber function is executed with an argument of 3, logging 3 to the console.

*/