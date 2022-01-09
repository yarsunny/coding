const str = "san|123||567";

function splitStr(str, splitBy) {
  let output = [];
  let temp = '';
  let i = 0;
  const spLen = splitBy.length;
  console.log('Start', `$i:${i}, strLen:${str.length}`);
  
  
  while(i < str.length) {    
    const currentEl = str[i];
    console.log(`Index at ${i}, temp: ${temp}`)
    
    // Match with starting of splitBy
    if (splitBy[0] === currentEl) {     
      let tempSplitBy = str.slice(i, spLen + i);
      
      if (tempSplitBy === splitBy) {
        console.log('matched');
        output.push(temp);
        temp = '';
        i = i + spLen;
      } else {
        temp = temp.concat(currentEl);
        i++;        
      }      
    } else {
      temp = temp.concat(currentEl);
      i++;
    }    
  }
  
  output.push(temp); 
  return output;
}

console.log(splitStr(str, '|'));
