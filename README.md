# RECURSION-CHECKPOINT-

**JavaScript Palindrome Checker**
This project contains a JavaScript function to check if a word is a palindrome.

**Instructions:**
Install Node.js and npm (if not already installed)
Open a terminal in the project directory
Run npm install to install any dependencies
Run node index.js to start the program
Enter a word to check if it is a palindrome
The program will output a message indicating whether the word is a palindrome or not
Breakdown of the Processing:
The function is_palindrome takes a word as input.
It checks if the length of the word is less than or equal to 1. If true, the word is considered a palindrome and the function returns True.
Otherwise, it compares the first and last characters of the word.
If the characters are equal, it recursively calls the is_palindrome function with the remaining part of the word (excluding the first and last characters).
If the characters are not equal, the word is not a palindrome and the function returns False.

**Stop Condition:**
The function terminates when one of the following conditions occurs:

The word is empty (length equals 0).
The word contains only one character (length equals 1).
The first and last characters of the word are not equal.
Example:
Enter a word: racecar
'racecar' is a palindrome.

**Contributing:**
Please feel free to contribute to this project by adding new features, fixing bugs, or improving the documentation.

**License:**
This project is licensed under GOMYCODE LEKKI.
