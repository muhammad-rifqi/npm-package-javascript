function reversedNum(num) {
    return (
      parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num)
    )                 
  }
  
  console.log(reversedNum(num)) 

  module.exports = reversedNum;