const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
if (date==null) return 'Unable to determine the time of year!';
let date2=new Date(1970,0,1,0,0,0,0);
if (date.getTime()==null) throw Error("NA");
let result=["winter","winter","spring","spring","spring","summer","summer","summer","autumn","autumn","autumn","winter"];
let coef=date.getMonth();
return result[coef];
};

