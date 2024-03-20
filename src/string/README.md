# String Cheatsheet

## Searching Techniques

* Rabin Karp - Use a rolling hash to locate matches. Worst bound is O(mn) + O(m), Avg is O(n). Useful for searching multiple words at time in given sentence.
* KMP - Pre-compute prefix length look-up to find matches using a rolling window approach. Precomputation takes O(m) and rolling window is bound to O(n). The extra O(m) memory helps achieve a faster search.

## Palindromes
* A decreasing sliding window can help verify if word is a palindrome
* An increasing sliding window can help find valida palindromic subsrtings

## Character Frequency
* Anagrams have same set of character ie will have matching frequencies
* A sliding window function combined with frequency map can help find substring with specific set of characters eg: finding anagrams
* For lowercase english words/sentences an optimization is using 26 int array to track frequency
