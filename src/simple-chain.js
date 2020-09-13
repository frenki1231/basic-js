const CustomError = require("../extensions/custom-error");

const chainMaker = {
  mus: [],
  getLength() {
    return this.mus.length;
  },
  addLink(value){
    if (value==undefined&&value!=null) value=" ";
    this.mus.push(value);
    return this;
  },
  removeLink(position) {
   if (typeof(position)!="number"||position<1) {
    this.mus.splice(0); 
    throw Error("Position isn't correct");
   }
   this.mus.splice(position-1,1);
   return this;
  },
  reverseChain() {
    this.mus.reverse();
    return this;
  },
  finishChain() {
    let newMus=this.mus.map(item => {
      if(item===" "){
        return "( )";
      }else{
        return `( ${item} )`;
      }
   }).join("~~");
    this.mus.splice(0);
    return newMus;
  }
};

module.exports = chainMaker;
