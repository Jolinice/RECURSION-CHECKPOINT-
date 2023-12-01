function isPalindrome(word) {
    // Convert the word to lowercase to make the comparison not be sensitive to case
    word = word.toLowerCase();
    
    // Base cases: an empty word or a word containing a single character is a palindrome
    if (word.length <= 1) {
    return true;
    }

    // Compare the characters at the ends of the word
    if (word[0] === word[word.length - 1]) {
      // Recursively test the rest of the word
    return isPalindrome(word.slice(1, -1));
    } else {
      // Stop if there is a difference
    return false;
    }
}

  // Example usage:
  console.log(isPalindrome("level"));   // true
  console.log(isPalindrome("hello"));   // false
  



