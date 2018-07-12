

function factorial(n) {
    // Complete this function
    return (n > 1) ? n * factorial(n-1) : n
}

function main() {
    var n = parseInt(readLine());
    var result = factorial(n);
    process.stdout.write("" + result + "\n");

}
