# String Cheatsheet

## Searching Techniques

1. Rabin Karp - Use a rolling hash to locate matches. Worst bound is O(mn) + O(m), Avg is O(n). Useful for searching multiple words at time in given sentence.
2. KMP - Pre-compute prefix length look-up to find matches using a rolling window approach. Precomputation takes O(m) and rolling window is bound to O(n). The extra O(m) memory helps achieve a faster search.
