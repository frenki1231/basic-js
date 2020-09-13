const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  function s(str){
    let a=str.split("").filter(item=>item!=" ");
    return a[0];
  }
  if (Array.isArray(members))  {
  return members.filter(item=>typeof(item)=="string").map(item=>s(item).toLowerCase()).sort().join("").toUpperCase();
  }
  return false;
};
