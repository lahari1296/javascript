function getVowels(str) {
  
var m = str.match(/[aeiou]/gi);
  
if (m === null) {
   
 return 0;
  
}
 
 return m.length;

}


document.write(getVowels('ranireddy'));
 