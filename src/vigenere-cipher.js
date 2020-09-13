const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mushin=true){
    this.simplMashine=mushin;
  }
  encrypt(str, key) {
    if (str==undefined||key==undefined) throw Error("There aren't parameters");
    let result="";
    let musLetter=[];
    let count=0;
    for (let i=0; i<26; i++){
      musLetter.push(String.fromCharCode(65+i));
    }
    function newMus(letter, mus){
      let newMus=[];
      newMus=[...mus.slice(mus.indexOf(letter.toUpperCase())),...mus.slice(0,mus.indexOf(letter.toUpperCase()))];
      return newMus;
    }
    for (let i=0; i<str.length; i++){
      let mus=[]
      if (count==key.length){
        count=0;
      }
      if (!musLetter.includes(str[i].toUpperCase())){
        result+=str[i];
      }else{
        mus=newMus(key[count], musLetter);
        result+=mus[musLetter.indexOf(str[i].toUpperCase())];
        count++;
      }
    }
     if (this.simplMashine) return result;
    return result.split("").reverse().join("");
  }     
  decrypt(str, key) {
    if (str==undefined||key==undefined) throw Error("There aren't parameters");
    let result="";
    let musLetter=[];
    let count=0;
    for (let i=0; i<26; i++){
      musLetter.push(String.fromCharCode(65+i));
    }
    function newMus(letter, mus){
      let newMus=[];
      newMus=[...mus.slice(mus.indexOf(letter.toUpperCase())),...mus.slice(0,mus.indexOf(letter.toUpperCase()))];
      return newMus;
    }
    for (let i=0; i<str.length; i++){
      if (count==key.length){
        count=0;
      }
      if (!musLetter.includes(str[i].toUpperCase())){
        result+=str[i];
      }else{
        result+=musLetter[newMus(key[count], musLetter).indexOf(str[i].toUpperCase())];
        count++;
      }
    }
    if (this.simplMashine) return result;
    return result.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;

