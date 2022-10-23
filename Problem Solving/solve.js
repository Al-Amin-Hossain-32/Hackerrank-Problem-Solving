// Mini-Max Sum javascript hackerrank solution
function miniMaxSum(arr) {
    // Write your code here
    let minMaxArray = [];
    let sum = 0;
    for(let i =0; i< arr.length; i++){
        sum += arr[i];
    }
    for(let j=0 ; j<arr.length; j++){
        minMaxArray.push(sum - arr[j]);
    }
    const max = minMaxArray.reduce((a,b) => Math.max(a,b));
    const min = minMaxArray.reduce((a,b) => Math.min(a,b));
    console.log(min + " " + max);
}

// Birth Day Cake Candles Function 

function birthdayCakeCandles(candles) {
    // Write your code here
    const bigCandle = Math.max(...candles);
    const count = candles.filter(x => x === bigCandle).length;
    return count;
}

//OR
function birthdayCakeCandles(arr){
  const velas = arr.filter(value => Math.max(...arr) === value)
    return velas.length;
}

// getTotalX function 

function getTotalX(a, b) {
    // Write your code here
   let result = 0;
    let index = 1;
    let cloneA = a.splice(1, a.length); // clone new array of a but not a[0]
    while(a[0] * index <= b[0]) {
        if(
         cloneA.every(item => (a[0] * index) % item === 0)
          &&
          b.every(item => item % (a[0] * index) === 0)
         ) {
            result++;
        }
        index++;
    }
    return result;
}
