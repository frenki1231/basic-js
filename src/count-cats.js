const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let count=0;
  for (let mus of arr){
    count+=mus.filter(item=>item=="^^").length;
  }
  return count;
};
