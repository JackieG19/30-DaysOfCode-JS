/*Task: To complete this challenge, you must save a 
line of input from stdin to a variable, print Hello, World. 
on a single line, and finally print the value of your variable on a second line.

Input Format:
A single line of text denoting  (the variable whose contents must be printed).

Output Format:
Print Hello, World. on the first line, and the contents of  on the second line.*/

function processData(inputString) {
    // This line of code prints the first line of output
    console.log("Hello, World.");
    
    // Write the second line of output that prints the contents of 'inputString' here.
    console.log(inputString);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
