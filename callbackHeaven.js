debugger;// nothing should be edited below this line until the next comment marker
function fastFunction(cb) {
  setTimeout(function () {
    cb("fastFunction error");
  }, 100);
}

function slowFunction(cb) {
  setTimeout(function () {
    cb(null, "slowFunction worked");
  }, 300);
}

function immediateFunction(cb) {
  cb(null, "immediateFunction worked");
}

// nothing should be edited above this line

function runSequentially(cb) {
  cb(null, immediateFunction);
  //fastFunction(cb);
  //slowFunction(cb);

}
  // pass in `messageHandler` as the callback to this function
  // invoke the 3 functions at the top of this file within this function
  // your code here... 


function messageHandler(err, data) {
  // use this function to define the callback that will be passed to `runSequentially`
  // this function supplies the "messageHandler handled " message  
  // your code here...
  if (err) {`messagehandler handled ${err} error`};

  return `messagehandler handled ${data} worked`;  
};

// after defining everything, invoke like this:
runSequentially(messageHandler(null, immediateFunction));//????

/*
  expected output of invoking `runSequentially`:

  "messageHandler handled slowFunction worked"
  "messageHandler handled fastFunction error"
  "messageHandler handled immediateFunction worked"

*/