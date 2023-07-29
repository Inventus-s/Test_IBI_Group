/* In what order will the numbers 1-4 be logged to the console when the code below is executed? Why? */

(function() {

    console.log(1); 

    setTimeout(function(){console.log(2)}, 1000); 

    setTimeout(function(){console.log(3)}, 0); 

    console.log(4);

})(); 

/* Explanation
The numbers 1, 4, 3, and 2 will be logged to the console, in that order.

Explanation:

The console.log(1) statement is a regular synchronous operation, so it will be executed first, logging 1 to the console.

The first setTimeout function with a delay of 1000 milliseconds (setTimeout(function(){console.log(2)}, 1000)) schedules the logging of 2 after a 1000-millisecond delay. This means it will be executed after approximately 1 second.

The second setTimeout function with a delay of 0 milliseconds (setTimeout(function(){console.log(3)}, 0)) may seem like it would log 3 immediately, but this is not the case. Even though the delay is 0 milliseconds, it's still an asynchronous operation and will be placed in the event queue. Since it's in the event queue, it will be executed after the synchronous code finishes.

The console.log(4) statement is another regular synchronous operation, so it will be executed after console.log(1), logging 4 to the console.
*/