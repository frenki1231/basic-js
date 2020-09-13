const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.separator==undefined)options.separator="+";
   if (options.additionSeparator==undefined)options.additionSeparator="|";
   function ret(str, num, r){
     let mus=[];
     if (str==="undefined"&&str!=="null") return "";
     if (num==undefined) return str;
     for (let i=0; i< num; i++){
       mus.push(str);
     }
     return mus.join(r);
   }
   let result=ret(str+"",options.repeatTimes,`${ret(options.addition+"",options.additionRepeatTimes,options.additionSeparator)}${options.separator}`)+ret(options.addition+"",options.additionRepeatTimes,options.additionSeparator);
   return result;
  };
