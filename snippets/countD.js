function countdown(seconds) {
    let interval = setInterval(() => {
      console.log(seconds);
      seconds--;
      if (seconds < 0) {
        clearInterval(interval);
        console.log("Time's up!");
      }
    }, 1000);
  }
  
  countdown(5); // Output: 5, 4, 3, 2, 1, Time's up!
  