function removeDuplicates(array) {
    return [...new Set(array)];
  }
  
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]
  
function removeDuplicates(array) {
    let unique = [];
    for (let i = 0; i < array.length; i++) {
      let exists = false;
      for (let j = 0; j < unique.length; j++) {
        if (array[i] === unique[j]) {
          exists = true;
          break;
        }
      }
      if (!exists) {
        unique.push(array[i]);
      }
    }
    return unique;
  }
  
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]
  
  