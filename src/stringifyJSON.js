// this is what you would do if you liked things to be easy:
// var handleObj = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  // output
  var output = '';

  // stringify
  var stringify = obj => {
    return typeof obj === 'string' ? '"' + obj + '"' : obj.toString();
  };

  // check for arrays
  var isArray = obj => Array.isArray(obj);

  var handleObj = obj => {
    // handle arrays
    if (isArray(obj)) {
      output += '[';
      obj.forEach((v, i) => {
        handleObj(v);
        if (obj.length - 1 !== i) {
          output += ',';
        }
      });
      return output += ']';
    }

    var objTp = typeof obj;

    // handle numbers & NaN
    if (objTp === 'number' && !Number.isNaN(obj)) {
      return output += stringify(obj);
    }

    // handle strings
    if (objTp === 'string') {
      return output += '"' + obj + '"';
    }

    // handle booleans
    if (objTp === 'boolean') {
      return output += stringify(obj);
    }

    // handle functions & undefined
    if (objTp === 'function' || objTp === 'undefined') {
      return output += undefined;
    }

    // handle null
    if (!obj) {
      return output += null;
    }

    // handle Object literals
    if (objTp === 'object') {
      output += '{';
      var count = Object.keys(obj).length;
      for (var props in obj) {
        var obTp = typeof obj[props];
        if (obTp === 'function' || obTp === 'undefined') {
          return output += '}';
        }
        if (count > 1) {
          handleObj(props);
          output += ':';
          handleObj(obj[props]);
          output += ',';
        } else {
          handleObj(props);
          output += ':';
          handleObj(obj[props]);
        }
        count--;
      }
      return output += '}';
    }
  };

  handleObj(obj);
  // return output
  return output;
};
