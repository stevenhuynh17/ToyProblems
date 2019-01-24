function jumpingOnClouds(c) {
    let jumps = 0
    // Iterate through the c clouds
    for (let i = 0; i < c.length;) {
        let current_cloud = c[i]
        // Check if 2nd cloud away is safe jump. 
        for (let j = 2; j > 0; j--) {
            let check_ref = c[i + j]
            // If safe, jump, save. 
            if (check_ref === 0) {
                console.log("JUMP")
                jumps += 1
                i = i + j
                console.log("NEW POSITION", i)
                break
            } 
            
            if (check_ref === undefined && j === 1) {
                console.log("END FOUND")
                i++
            }
            console.log("DANGER")
        }
    }
    // If not, check 1st cloud
    return jumps
}
