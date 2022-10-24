// Complete the formingMagicSquare function below.
function formingMagicSquare(s) {
    const squares = ['618753294', '816357492', '834159672', '438951276', '672159834', '276951438', '294753618', '492357816'];
    let min = 100;
    let cost = (s, squares) => {

        return [...s.map(value => value.join('')).join('')].reduce((target, item, index) => {
            target += Math.abs(+item - +squares[index])

            return target;
        }, 0)
    };

    squares.forEach((item, index) => {
        let value = cost(s, squares[index]);

        (value < min) && (min = value);
    });

    return min;
}



***###// Complete the climbingLeaderboard function below.


function climbingLeaderboard(scores, alice) {
  let rank = [];
  for (let i = 0; i < scores.length; i++) {
    if (rank.length === 0) {
      rank.push(scores[i]);
    } else {
      if (rank[rank.length - 1] === scores[i]) {
        continue;
      }
      rank.push(scores[i]);
    }
  }
  
  let res = [];
  let lowestRank = rank.length;
  for (let i = 0; i < alice.length; i++) {
    while (alice[i] >= rank[lowestRank - 1] && lowestRank > 0) {
      rank.pop;
      lowestRank--;
    }
    res.push(lowestRank + 1);
  }
  return res;
}

***###// Complete the extraLongFactorials function below.

function extraLongFactorials(n) {
    // Write your code here
let fact = BigInt(1)
    for(var num=2n; num<=n; num++){
        fact = fact * num
    }
    console.log(fact.toString())
}


***###// Complete the nonDivisibleSubset function below.

function nonDivisibleSubset(k, s) {
  // Write your code here
  let values = new Array(k).fill(0);
  let result = 0;

  s.reduce((target, item, index) => {
    values[item % k] += 1;

    return target;
  }, []);

  for (let i of Array.from(
    { length: (k + 1) / 2 - 1 },
    (value, index) => index + 1
  )) {
    result += Math.max(values[i], values[k - i]);
  }

  !(k % 2) && !!values[k / 2] && (result += 1);

  values[0] && (result += 1);

  return result;
}

// Problem : Bigger is Greater 
// Lexicographic order


function biggerIsGreater(s) {
    // Write your code here
let length = s.length;
  let otherStr = "";
  let ins = 0;
  let greaterC = "";
  for (let i = s.length - 1; i >= 0; i--) {
    let cur = s[i];
    if (cur < s[i + 1]) {
      ins = i;
      for (let j = ins; j < s.length; j++) {
        if (greaterC <= cur) {
          greaterC = s[j];
        }
        if (s[j] < greaterC && s[j] > cur) {
          greaterC = s[j];
        }
      }
      break;
    } else {
      otherStr += s[i];
    }
  }
  otherStr += s[ins];
  otherStr = otherStr.replace(greaterC, "");
  otherStr = otherStr.split("").sort().join("");
  if (!greaterC) {
    return "no answer";
  }
  let newStr = "";
  for (let i = 0; i < length; i++) {
    if (i < ins) newStr += s[i];
    if (i === ins) newStr += greaterC;
  }
  newStr += otherStr;
  return newStr;

}

//Absolute Permutation hackerrank solution javascript

function absolutePermutation(n, k) {
    // Write your code here
     const D = {}
    for (let i=1; i <= n; i++)
        if (i-k > 0 && !D[i-k]) D[i-k] = i
        else if (i+k <= n && !D[i+k]) D[i+k] = i
        else return [-1]
    return Object.values(D)

}


// Highest Value Palindrome

function highestValuePalindrome(s, n, k) {
    // Write your code here
if (n === 1) return k == 1 ? '9' : '-1'
            
    let arr = [...s]
    let c = Array(n).fill(0)
    let x = Math.floor(n/2) + (n&1)
    
    for (let i = 0; i < x; i++) {
        if (arr[i] !== arr[n-1-i]) {
            arr[i] = arr[n-1-i] = Math.max(arr[i], arr[n-1-i])
            c[i]++
            k--
        }
        if (k < 0) return '-1'
    }
    
    for (let i = 0; i < x; i++) {
        if (arr[i] != '9') {
            let cost = c[i] === 1 || i === (n-1-i) ? 1 : 2
            if (k >= cost) {
                arr[i] = arr[n-1-i] = '9'
                k -= cost
            }
        }
    }
    return arr.join('')
}
