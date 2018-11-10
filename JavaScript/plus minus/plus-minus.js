// Solution

function plusMinus(arr) {
    // pos neg zero format
    var counter = [0, 0, 0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0)
            counter[0]++;
        else if(arr[i] < 0)
            counter[1]++;
        else
            counter[2]++;
    }
    console.log(Number.parseFloat(counter[0] / arr.length).toPrecision(6));
    console.log(Number.parseFloat(counter[1] / arr.length).toPrecision(6));
    console.log(Number.parseFloat(counter[2] / arr.length).toPrecision(6));
}
