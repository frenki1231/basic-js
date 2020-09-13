const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let mus=[];
    if (arr.length==0) return 1;
    for (let i=0; i<arr.length; i++){
      let count=0;
      if (!Array.isArray(arr[i])){
        count=1;
      }else{
        count = 1 + this.calculateDepth(arr[i]);
      }
      mus.push(count);
    }
    return Math.max(...mus);
  }
};
