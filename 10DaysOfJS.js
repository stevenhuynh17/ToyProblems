// DAY 1

function getArea(length, width) {
    let area;
    // Write your code here
    
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    
    return perimeter;
}

function factorial(val) {
    let value = 1
    for(let i = val; i > 0; i--) {
        value *= i
    }
    return value
}

function main() {
    const PI = Math.PI
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let input = readLine() 
    // Print the area of the circle:
    console.log(PI * input * input)
    // Print the perimeter of the circle:
    console.log(2 * PI * input)
    
 // DAY 2
    
 function getGrade(score) {
    let grade;
    // Write your code here
    if(25 < score && score <= 30) {
        grade = 'A'
    } else if(20 < score && score <= 25) {
        grade = 'B'
    } else if(15 < score && score <= 20) {
        grade = 'C'
    } else if(10 < score && score <= 15) {
        grade = 'D'
    } else if(5 < score && score <= 10) {
        grade = 'E'
    } else if(0 < score && score <= 5) {
        grade = 'F'
    }
    return grade;
}
    
function getLetter(s) {
    let letter;
    switch(true) {
        case ("aeiou").includes(s[0]):
            letter = 'A'
            break
        case ("bcdfg").includes(s[0]):
            letter = 'B'
            break
        case ("hjklm").includes(s[0]):
            letter = 'C'
            break
        case ("npqrstvwxyz").includes(s[0]):
            letter = 'D'
            break
        default :
            letter
    }
    
    return letter;
}
    
