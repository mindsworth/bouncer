
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var newArr = [];
  var g, h;
  
//   FOR LOOP HERE
  for(var i = 0; i < arr.length; i++) {
    h = arr[i];
    g = Boolean(h);
//     WITH A CONDITIONAL STATEMENT HERE
    if(g === true) {
      newArr.push(h);
    }
    
    
  }
  
  
  return newArr;
}



bouncer([7, "ate", "", false, 9]);
