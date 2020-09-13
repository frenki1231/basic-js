const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(Array.isArray(arr)==false) throw Error("arr is not array!");
  let result=[];
  let mus = ["--discard-next","--discard-prev","--double-next","--double-prev"];
  for (let i=0; i<arr.length; i++){
    if (arr[i]=="--discard-next"){
        i++;
  } else if (arr[i]=="--discard-prev"&&arr[i-2]!="--discard-next"){
       result.pop();
  } else if (arr[i]=="--double-next"&&arr[i+1]!=undefined) {
      result.push(arr[i+1]);
  } else if (arr[i]=="--double-prev"&&arr[i-1]!=undefined&&arr[i-2]!="--discard-next") {
        result.push(arr[i-1]);
  } else if (!mus.includes(arr[i])){
        result.push(arr[i]);
    }
  }
  return result;
};
