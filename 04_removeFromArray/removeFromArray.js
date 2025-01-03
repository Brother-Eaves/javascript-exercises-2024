const removeFromArray = function(array, ...args) {
  const output = []
   array.forEach((index) => {
    if (!args.includes(index)) {
        output.push(index)
    } 
   });
    return output
};

// Do not edit below this line
module.exports = removeFromArray; 
