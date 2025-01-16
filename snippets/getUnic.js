function uniqueElements(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
  }
  
  console.log(uniqueElements([1, 2, 3], [3, 4, 5])); // Output: [1, 2, 3, 4, 5]
  