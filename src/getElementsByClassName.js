// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  // root
  var root = document.body;

  // elementsList
  var elementsList = [];

  // helper function
  const getClass = function(element) {
    // check the element for the class name
    if (Array.prototype.slice.call(element.classList).includes(className)) {
      elementsList.push(element);
    }
    // check if element has children
    // rinse and repeat
    if (element.children) {
      Array.prototype.slice.call(element.children).forEach(c => {
        getClass(c);
      });
    }
  };

  //call helper
  getClass(root);

  // return elementsList
  return elementsList;
};