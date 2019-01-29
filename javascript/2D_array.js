function hourglassSum(arr) {
    // Assign upper, mid, and lower portions
    let reducer = (acc, val) => {
        return acc + val
    }
    let largest = null

    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        for (let j = 0; j < arr.length; j++) {
            
            if (arr[i + 2] === undefined) {
                break
            }
            let lower = arr[i + 2].slice(j, j + 3)
            let mid = arr[i + 1][j+1]
            let upper = arr[i].slice(j, j + 3)

            if (upper.length < 3 || lower.length < 3) {
                break
            }
            sum = upper.reduce(reducer) + lower.reduce(reducer) + mid
            console.log(sum)
            if (largest === null) {
                largest = sum
            }
            
            if (sum > largest) {
                largest = sum
            }
        }
    }
    return largest
}
