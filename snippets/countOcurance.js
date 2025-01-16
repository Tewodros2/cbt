function countOccurrences(array) {
    return array.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
  }
  
  console.log(countOccurrences(["apple", "banana", "apple", "orange"])); 
  // Output: { apple: 2, banana: 1, orange: 1 }
  

//   function countOccurrences(array) {
//     let counts = {};
//     for (let i = 0; i < array.length; i++) {
//       if (!counts[array[i]]) {
//         counts[array[i]] = 1;
//       } else {
//         counts[array[i]]++;
//       }
//     }
//     return counts;
//   }
  
//   console.log(countOccurrences(["apple", "banana", "apple", "orange"])); 
//   // Output: { apple: 2, banana: 1, orange: 1 }
  