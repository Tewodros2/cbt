class Stopwatch {
    constructor() {
      this.startTime = 0;
      this.endTime = 0;
      this.running = false;
    }
  
    start() {
      if (this.running) return;
      this.running = true;
      this.startTime = Date.now();
    }
  
    stop() {
      if (!this.running) return;
      this.running = false;
      this.endTime = Date.now();
    }
  
    getDuration() {
      return (this.endTime - this.startTime) / 1000;
    }
  }
  
  const sw = new Stopwatch();
  sw.start();
  setTimeout(() => {
    sw.stop();
    console.log(`Duration: ${sw.getDuration()} seconds`);
  }, 3000);

  