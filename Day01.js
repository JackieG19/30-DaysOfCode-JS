/*Task: Declare  variables: one of type int, one of type double, and one of type String.
Read  lines of input from stdin and initialize your  variables.
(according to the sequence given in the Input Format section below)

Use the  operator to perform the following operations: 
Print the sum of  plus your int variable on a new line.
Print the sum of  plus your double variable to a scale of one decimal place on a new line.
Concatenate  with the string you read as input and print the result on a new line.

Input Format:
The first line contains an integer that you must sum with i. 
The second line contains a double that you must sum with d.
The third line contains a string that you must concatenate with s.

Output Format:
Print the sum of both integers on the first line, the sum of 
both doubles (scaled to 1 decimal place) on the second line, 
and then the two concatenated strings on the third line.*/

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    
var i1;
var d1;
var s1;
    // Read and save an integer, double, and String to your variables.
i1 = parseInt(readLine());
d1 = Number(readLine());
s1 = readLine();
    // Print the sum of both integer variables on a new line.
console.log(i + i1);
    // Print the sum of the double variables on a new line.
console.log((d + d1).toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
  console.log(s + s1);  
}
