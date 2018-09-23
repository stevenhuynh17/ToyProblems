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
    
/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

    
// DAY 4
class Polygon {
    constructor(array) {
        this.sides = array
    }
    
    perimeter() {
        return this.sides.reduce((total, currentValue) => {
            return total + currentValue
        })
        
    }
}
    
/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let count = 0
    for(let key in objects) {
        // console.log(objects[key])
        if(objects[key].x === objects[key].y) {
            count++
        }
    }
    return count
}
    
/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    return {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b
    }
}
    
