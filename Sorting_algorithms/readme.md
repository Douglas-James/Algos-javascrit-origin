<!-- Hi There This a Sorting -->
```
                              [x] Sorting Algorithms
[1] Bubble Sort - Bubble sort compares the values of an array starting from index 1 and index 2, and places the smaller value at the start and the larger value at the end
[2] Insertion Sort - Insertion Sort gradually builds up the sort by creating a larger left half, which is always sorted.
[3] Selection Sort - Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.
[4] Merge Sort - Merge Sort creates a half of the length of the array and breaks the half from left to right. It sorts the values to the right position and brings the left array that has been compared like the left and merges them together.
[5] Quick Sort - You can do this one
[6] Radix Sort - You can do this one
```
```
  Because Radix sort is problematic for me, here’s something that might help
  ___ ___  ___ ___ ___ ___ ___ ___ ___ ___
|720  21  222 233  424 575 296 27  8 39|
___ ___  ___ ___ ___ ___ ___ ___ ___ ___
| 0   1    2   3   4 | 5   6   7   8  9|
|         27        |                  |
|         424       |                  |
|         222       |                  |
| 8       21  39    |                  |
| 1       720 233   |         575   296|
___ ___  ___ ___ ___ ___ ___ ___ ___ ___
| Here is the tent place are positioned | 
|___ ___  ___ ___ ___ ___ ___ ___ ___ __|
| 0   1    2   3   4   5   6   7   8  9 |
| Here is   hundred are position        | 
| use the blow example sort to sort it  | 
|___ ___  ___ ___ ___ ___ ___ ___ ___ __|
| [1,8,720,21,222,424,27,233,39,574,296]|
```
[Radix sort](https://visualgo.net/en/sorting?slide=4)
// Radix sort doesn't take negative numbers