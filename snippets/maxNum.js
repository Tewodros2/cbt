// function findLargest(array) {
//     return Math.max(...array);
//   }
  
// console.log(findLargest([10, 20, 30, 40, 50])); // Output: 50
  
function findLargest(array) {
    let largest = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > largest) {
        largest = array[i];
      }
    }
    return largest;
  }
  
  console.log(findLargest([10, 20, 30, 40, 50])); // Output: 50
  
  