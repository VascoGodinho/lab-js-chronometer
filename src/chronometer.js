class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
   
     
    
      this.intervalId = setInterval(() => {
       this.currentTime += 1
       if (typeof printTimeCallback === `function`){
       printTimeCallback(); 
       }     
     }, 1000)
    
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
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
    
    return `${splitMins}:${splitSecs}`;
  }
}
