// helper function to generate random id
function randomId() {
    return Math.random().toString(16).substr(2);
  }

//export functions so that it can be imported by other classes
module.exports = randomId