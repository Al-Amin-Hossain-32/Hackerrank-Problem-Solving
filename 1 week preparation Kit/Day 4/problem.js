// Grid Challenge

function gridChallenge(grid) {
    let g = grid
    let n = g.length
    let l = g[0].length // There are non-square matrices in the input!
    
    // sort the rows
    for (let i=0; i < n; i++) {
        g[i] = g[i].split('').sort().join('')
    }

    // transpose the array
    let t = new Array(n).fill('')
    for (let j=0; j < n; j++) {
        for (let i=0; i < l; i++) {
            t[i] = (t[i]+'').concat(g[j][i])
        }
    }
    
    // check if every row is sorted
    for (let s of t) {
        if (! s.split('').every((v,i,a) => !i || a[i-1] <= v)) {
            return 'NO'
        }
    }
    return 'YES'
}
