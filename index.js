const stringLength = (string => {
  if (string.length !==0 && string.length < 10) {
    return string.length
    
  }
  else {
    return "String must be more than 0 and less than 10"
  }
});

const reverseString = (strings) => {
  let keep = [];
 for(let i = 0; i < strings.length; i++) {
    keep.push(strings[i])
  }
 keep.reverse();
 return keep.join('')
};

console.log(reverseString('guy'))

module.exports = stringLength, reverseString;