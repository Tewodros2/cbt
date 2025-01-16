function removeFalsyValues(array) {
    return array.filter(Boolean);
  }
  
  console.log(removeFalsyValues([0, 1, false, 2, "", 3])); // Output: [1, 2, 3]
  