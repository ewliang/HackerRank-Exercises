// Solution
// This is for perfect square 2D array only.

function diagonalDifference(arr) {
    var diagonal1 = 0;
    var diagonal2 = 0;
    for(let i = 0; i < arr.length; i++) {
        diagonal1 += arr[i][i];
        diagonal2 += arr[i][arr.length - i - 1];
        console.log(arr[i][i], arr[i][arr.length - i - 1]);
    }
    //console.log(diagonal1, diagonal2);
    return Math.abs(diagonal1 - diagonal2);
}
