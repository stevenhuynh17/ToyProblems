

Array.prototype.isSubsetOf = function (arr) {
	// your code here
	// Create an object to push all elements in the array into an object. 
	// var catalog = {}; 

	for (var i = 0; i < this.length; i++) {
		if (arr.indexOf(this[i]) === -1) {
			return false; 
		}
	}
	return true; 
}; 

// var result = ['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox']);
// console.log(result); // False

// var result = ['cat', 'cat', 'dog'].isSubsetOf(['cat', 'dog']); 
// console.log(result); // True

// var result = ['cat', 'cat', 'dog'].isSubsetOf(['cat']); 
// console.log(result); // False
// var b = ['merge','reset','reset']
// console.log(b.isSubsetOf(['reset','merge','add','commit'])) // true 




