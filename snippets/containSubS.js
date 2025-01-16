// function containsSubstring(str, substring) {
//     return str.includes(substring);
//   }
  
//   console.log(containsSubstring("Hello, world!", "world")); // Output: true
  

  function containsSubstring(str, substring) {
    for (let i = 0; i <= str.length - substring.length; i++) {
      let match = true;
      for (let j = 0; j < substring.length; j++) {
        if (str[i + j] !== substring[j]) {
          match = false;
          break;
        }
      }
      if (match) return true;
    }
    return false;
  }
  
  console.log(containsSubstring("Hello, world!", "world")); // Output: true
  