/*Input Format:
A single line containing a positive integer, n.

Output Format
Print Weird if the number is weird; otherwise, print Not Weird*/

function main() {
    var N = parseInt(readLine());
    if(N%2 === 1) {
        console.log("Weird");
    } else if (N%2 === 0 && N >= 2 && N <= 5) {
        console.log("Not Weird");
    } else if (N%2 === 0 && N >= 6 && N <= 20) {
        console.log("Weird");
    } else {
        console.log("Not Weird");
    }
}
