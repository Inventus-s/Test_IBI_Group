/*  Explain the output of the above-given code and explain why? */

for (var i = 0; i < 5; i++) {

  setTimeout(() => console.log(i), 1000);

}

/* Output
5
5
5
5
5
*/

//  Explanation

/* 
The output of the above code will be:

Copy code
5
5
5
5
5
Explanation:

In this code, a for loop is used to iterate from 0 to 4 (5 iterations in total) with the variable i. For each iteration, a setTimeout function is called with a delay of 100 milliseconds, and inside it, a console.log(i) statement is executed.

The behavior we observe here is due to the concept of closures and the asynchronous nature of JavaScript.

When the setTimeout function is called, it schedules the execution of the provided function (the arrow function with console.log(i)) after the specified delay (100 milliseconds in this case). However, the loop doesn't wait for the setTimeout to finish; it continues running immediately. During this process, the value of i keeps changing in each iteration of the loop.

By the time the first setTimeout triggers and executes the arrow function, the loop has already finished running, and the value of i has become 5. This is because var has function scope (not block scope like let or const), so the variable i is shared across all iterations, and there's only one instance of i that is being modified.

As a result, when the arrow function inside setTimeout runs after the delay, it prints the current value of i, which is 5 (the value it had when the loop finished). Therefore, you see "5" printed five times in the output. 
*/