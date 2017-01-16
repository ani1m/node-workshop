// First program

console.log('Hello-World!');

setTimeout(function() {console.log('Hello World Again!!')}, 10000);

// Wild interval

setInterval(function() {

  console.log('Hello World!');

}, 10000);

// with set timeout
function repeat() {
    console.log('Hello World!');
    setTimeout(repeat, 10000);
    repeat();
}
