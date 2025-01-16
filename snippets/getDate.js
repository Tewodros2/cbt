function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString();
  }
  
  console.log(getCurrentDateTime()); // Output: Current date and time
  