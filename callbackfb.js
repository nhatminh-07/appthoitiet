let duration = 10000
console.log("Timer:", duration/1000, "seconds")
function callback() {
    console.log(1)
  }
setTimeout(callback, duration)