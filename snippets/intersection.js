// function arrayIntersection(arr1, arr2) {
//     return arr1.filter(value => arr2.includes(value));
//   }
  
//   console.log(arrayIntersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]

  

  function arrayIntersection(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          result.push(arr1[i]);
          break;
        }
      }
    }
    return result;
  }
  
  console.log(arrayIntersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
  