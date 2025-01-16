// const numbers = [10, 5, 8, 1, 7];
// numbers.sort((a, b) => a - b);
// console.log(numbers); // Output: [1, 5, 7, 8, 10]



function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  }
  
  console.log(bubbleSort([5, 1, 4, 2, 8])); // Output: [1, 2, 4, 5, 8]
  
