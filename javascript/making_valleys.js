function countingValleys(n, s) {
    let elevation = 0
    let track = false
    let valley_count = 0

    // Iterate over string. Keep track if value goes below 0
    s.split('').forEach((letter) => {
        // If value < 0, keep track until it reaches 0 again
        if (letter === 'U') {
            elevation += 1
            if (elevation === 0 && track === true) {
                track = false
                valley_count += 1
            }
            
        } else if (letter === 'D') {
            elevation -= 1
            if (elevation < 0) {
                track = true
            }
        }
    })

    // Return valley amount value
    return valley_count
}
