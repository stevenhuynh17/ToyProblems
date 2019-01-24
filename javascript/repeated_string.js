function repeatedString(s, n) {
    // N is max length, cycle over position within S until done
    
    let whole_val = Math.floor(n / s.length)
    let remainder = n % s.length
    let count = 0

    for (let i = 0; i < s.length; i++) {
        let current = s[i]
        if (current === 'a') {
            count++
        }
    }

    count *= whole_val

    if (remainder !== 0) {
        for (let i = 0; i < remainder; i++) {
            let current = s[i]
            if (current === 'a') {
                count++
            }
        }    
    }
    
    
    return count
}
