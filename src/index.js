module.exports = function check(str, bracketsConfig) {
  if (str.length == 0) {
    return false;
  }
  var addArray = [];
  var open = [];
  var close = [];
  for (var i = 0; i < bracketsConfig.length; i++) {
    open.push(bracketsConfig[i][0]);
    close.push(bracketsConfig[i][1]);
  }
  for (var j = 0; j < str.length; j++) {
    if (addArray.length == 0) {
      addArray.push(str[j]);
    } else {
      if (str[j] === close[open.indexOf(addArray[addArray.length - 1])]) {
      addArray.pop();
    } else if (open.includes(str[j])) {
      addArray.push(str[j]);
    } else {
      return false;
    }
    }
  }
  if (addArray.length == 0) {
    return true;
  } else {
    return false;
  }
}
