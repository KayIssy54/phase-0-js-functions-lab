
function calculateTax(amount) {
    return amount * 0.10; // 10% tax
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}


function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;
}


function isPalindrome(word) {
    const cleanedWord = word.toLowerCase();
    return cleanedWord === cleanedWord.split('').reverse().join('');
}


function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice - (originalPrice * (discountPercentage / 100));
}



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };