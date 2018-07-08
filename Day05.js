/* Loops

Task: Given an integer,n, print its first 10 multiples. 
Each multiple n x i (where 1 < i < 10) should be printed 
on a new line in the form.

n x i = result.

Input: A single integer, n.
Constraints: 2 < n < 20
Output: each line i contains the of n x i in the form: n x i = result.*/


function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var n = parseInt(readLine());
    
    for(i = 1; i < 11; i++){
        result = n * i;
        console.log(n + ' x ' + i + ' = ' + result);
    }

}
