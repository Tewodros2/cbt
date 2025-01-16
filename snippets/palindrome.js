function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
  }
  
  console.log(isPalindrome("radar")); // Output: true
  console.log(isPalindrome("hello")); // Output: false
  

  function isPalindrome(str) {
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isPalindrome("radar")); // Output: true
  console.log(isPalindrome("hello")); // Output: false
  