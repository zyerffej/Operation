js
function subLength ( str, chr) {
const position = [];
for(let i = 0; i < str.length; 1++)
if (str[i] === chr){
    position.push(i)
  }
  
  if (position.length === 2){
    return position[1] - position[0]+ 1;
  }

  return 0;
}
console.log(subLength)('Saturday', 'a'); // returns 6
console.log(subLength)('summer', 'm'); // returns 2
console.log(subLength)('digitize', 'i'); // returns 0
console.log(subLength)('cheesecake', 'k'); // returns 0