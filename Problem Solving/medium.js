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
