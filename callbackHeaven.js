 // nothing should be edited below this line until the next comment marker
function fastFunction (cb) {
  setTimeout(function () {
    cb('fastFunction error')
  }, 100)
}

function slowFunction (cb) {
  setTimeout(function () {
    cb(null, 'slowFunction worked')
  }, 300)
}

function immediateFunction (cb) {
  cb(null, 'immediateFunction worked')
}
// nothing should be edited above this line

function runSequentially (cb) { 
  // pass in `messageHandler` as the callback to this function
  // invoke the 3 functions at the top of this file within this function
  // your code here...
  // invoke immediateFunction( ( err, data ) => { 
  immediateFunction((err, data) =>{
    //if err what? console.error(`Error in messageHandler`, err)
    if (err) {
      console.error(`Error in immediateFunction`, err)
      cb(err);
    } else {
      cb(null, data);
    }
  })
    // 
};

function messageHandler (err, data) {
  // use this function to define the callback that will be passed to `runSequentially`
  // this function supplies the "messageHandler handled " message
  // your code here...
  if (err) {
    console.error(`Error in messageHandler`, err);
    console.log(`messageHandler handled ${data} error`);
  } else {
    console.log(`messageHandler handled ${data}`);
  }
};

// after defining everything, invoke like this:
runSequentially(messageHandler);
/*
  expected output of invoking `runSequentially`:

  "messageHandler handled slowFunction worked"
  "messageHandler handled fastFunction error"
  "messageHandler handled immediateFunction worked"

*/
