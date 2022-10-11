// Lonelyinteger Function 

function lonelyinteger(arr) {
    // Write your code here
for (const num of arr) {
        if (arr.indexOf(num) === arr.lastIndexOf(num)) return num;
    }
    return 'No lonely integers.';
}


// Diagonal Difference javascript hackerrank solution
function diagonalDifference(arr) {
    // Write your code here
    let leftToRightDiag = 0;
    let rightToLeftDiag = 0;
    for(let i =0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(i === j){
                leftToRightDiag += arr[i][j];
            }
            if(i + j === arr.length - 1){
                rightToLeftDiag += arr[i][j];
            }
        }
    }
    return Math.abs(leftToRightDiag - rightToLeftDiag);
}
