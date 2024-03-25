# Array cheatsheet

## Sorting Techniques

Generic techniques
1. Selection sort
2. Insertion sort
3. Bubble sort
4. Merge sort
5. Quick sort
6. Heap sort
7. Radix sort

Special techniques for niche use cases
1. Counting sort - when collection contains many duplicates, because of duplciates O(m) is constrained and time complexity becomes O(m+n).
2. Cycle sort - it's write optimized because it makes fewest swaps. The best use of this algo is when array contains continuous range of elements (eg: 1 to N).
3. Bucket sort - When distribution of elements is fairly uniform then sorting small sub-arrays and joining them requires fewer loops.

## Leveraging sorted data
1. Using binary search requires O(logN)
2. Comparing contiguous elements in linear time to find over-lapping intervals

## Using pointers
Using two pointers to keep track of anchor(s) eg: start and/or end eg: Merging sorted arrays, dutch national flag problem, container with most water

## Sliding window
Similar to two pointers except pointers are non over-lapping. Adjusting start and end pointers of a sub-array as long as valid window conditions are met, and moving the window linearly to find one (or more) valid windows

## Pointer stack
Using a stack of pointers to track seen elements. Popping from stack when right-most element for that pointer is found eg: number of days you have to wait for higher temperature, number of people a person can see
