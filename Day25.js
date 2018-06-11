function isPrime(num) {
    if (num === 1) {
        return false;
    }
    
    for (var i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function processData(input) {
    var tests = input.split('\n');
    var totalTests = tests.shift();
    
    for (var i = 0; i < totalTests; i++) {
        if (isPrime(parseInt(tests[i], 10))) {
            console.log('Prime');
        } else {
            console.log('Not prime');
        }
    }
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
