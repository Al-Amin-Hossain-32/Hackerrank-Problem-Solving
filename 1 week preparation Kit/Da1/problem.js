// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14

//** SOLUTION 
function miniMaxSum(arr) {
// Write your code here
    let sum=arr.reduce((a,b)=>{
        return a+b;
    });
    const min=sum-Math.max(...arr);
    const max=sum-Math.min(...arr);

    console.log(min+" "+max);
}

//Time Conversion Function 
// Sample Input

// STDIN           Function
// -----           --------
// 6               arr[] size n = 6
// -4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
// Sample Output

// 0.500000
// 0.333333
// 0.166667

function timeConversion(s){
    let inputArray = s.split(":");
    let hours = parseInt(inputArray[0]);
    let minutes = inputArray[1];
    let timeFrame = inputArray[2].slice(2);
    let seconds = inputArray[2].slice(0,2);
    if((timeFrame === "PM") && (hours !== 12)){
        hours+=12 ;
    }
    if((timeFrame === "AM") && (hours === 12)){
        hours = "00"
    } else if(hours<10){
        hours = "0" + hours.toString();
    } else {
        hours = hours.toString();
    }
    return ([hours,minutes,seconds].join(":"))
}

