process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    var maxSum = -63;
    for (var i=1; i<5; i++){
        for (var j=1; j<5; j++){
            var sum = 0;
            sum += arr[i-1][j-1];
            sum += arr[i-1][j];
            sum += arr[i-1][j+1];
            sum += arr[i][j];
            sum += arr[i+1][j-1];
            sum += arr[i+1][j];
            sum += arr[i+1][j+1];
            
            if (sum>maxSum)
                maxSum = sum;
        }
    }
    console.log(maxSum);
}
