// Memoization using Closures
function memoisedSum() {
    let result = {}; // Stores previously computed sums
    return function(n1, n2) {
        let sum = n1 + n2;
        if (result[`${n1},${n2}`]) { // Check if the sum already exists in cache
            console.log("cached", result[`${n1},${n2}`]);
            return result[`${n1},${n2}`]; // Return cached result
        }
        result[`${n1},${n2}`] = sum; // Store new result in cache
        return sum; // Return computed sum
    };
}

// Using Higher-Order Function (HOC) for Memoization (Better Approach)
const memoizationwithhoc = (fn) => {  
    let result = {}; // Stores previous function outputs
    return (...args) => { // Accepts dynamic arguments
        if (result[args]) { // Checks if the result is already in cache
            return result[args]; // Returns cached result
        }
        const res = fn(...args); // Calls original function if not cached
        result[args] = res; // Stores result in cache
        return res; // Returns computed result
    };
};

// Simple function for addition
const sum = (a, b) => {
    return a + b;
};

// Creating memoized version of sum function
let sumDatawithhoc = memoizationwithhoc(sum);

console.log(sumDatawithhoc(2, 3)); // Calculates & stores result (5)
console.log(sumDatawithhoc(2, 3), "cached"); // Returns cached 5
console.log(sumDatawithhoc(1, 3)); // Calculates & stores result (4)
console.log(sumDatawithhoc(2, 3), "cached"); // Returns cached 5

// let sumData = memoisedSum(); // Uncomment to test memoized function using closures

// console.log(sumData(1,2)); // Uncomment to s


// The closure-based approach (memoisedSum) is specific to summing two numbers.
// The HOC approach (memoizationwithhoc) is more reusable as it works with any function.
// Both methods use caching (memoization) to avoid redundant calculations.