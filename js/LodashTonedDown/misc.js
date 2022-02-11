// some things that I might need
var comparatorFunc ={
    deepEqual(x,y){ //x,y are arrays
      var equalLength = x.length === y.length;
      //console.log(equalLength);
      if(equalLength){
        var i = x.length;
        while (i--){
          if(x[i] !== y[i]) {
            return false;
          };
        return true;
        };
      } else {
        return false;
      };
    },
  
    isEqual(a,b){ //a,b are objects
      var aKeys = Object.keys(a);
      var bKeys = Object.keys(b);
      var aVals = Object.values(a);
      var bVals = Object.values(b);
      //idk why this. not working: stack overflow says something about object being still in progress
      if(comparatorFunc.deepEqual(aKeys, bKeys) && comparatorFunc.deepEqual(aVals, bVals)){
        return true;
      } else {
        return false;
      };
    }
  }
  
  module.exports = comparatorFunc;