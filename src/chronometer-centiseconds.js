class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (typeof printTimeCallback === 'function'){
      printTimeCallback(); 
      }     
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60);
  }

  getCentiseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    let valueString = value.toString();

    if (valueString.length < 2)
    {
      valueString= `0` + valueString;
    }

    return valueString;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const splitSecs = this.computeTwoDigitNumber(this.getSeconds())
    const splitMins = this.computeTwoDigitNumber(this.getMinutes())
    const splitCens = this.computeTwoDigitNumber(this.getCentiseconds())
    
    return `${splitMins}:${splitSecs}.${splitCens}`;
  }
}
