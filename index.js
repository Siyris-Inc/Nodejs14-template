console.log("Hello world from Nodejs " + process.version + "!\n");

let obj = {}
if (obj?.not?.hm) {
  console.log("impossible!")
} else {
  console.log("the typescript compiler may show an error (if you are in the main editor) but don't let it delude you! The typescript compiler thinks we're on Nodejs 12, but in reality, we have the some of the latest features!")
}