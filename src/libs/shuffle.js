module.exports = function(s){
  let newStr = s.split("");
  let tempLetter;
  for(let i = newStr.length-1; i > 0; i--){
    let randInd = Math.floor(Math.random()*i);
    tempLetter = newStr[i];
    newStr[i] = newStr[randInd];
    newStr[randInd] = tempLetter;
  }
  return newStr.join("");
}