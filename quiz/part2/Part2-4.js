function pasanganTerbesar(num) {
  // you can only write your code here
  let nilai = 0
  let numStr = "" + num
  for(let i = 0; i < numStr.length-1; i++){
    //console.log(i)
   let numInt = parseInt(numStr[i] + numStr[i+1])
   //console.log(numInt)
   if(numInt > nilai){
     nilai = numInt
     //console.log(`${nilai} sma dgn ${numInt}`)
   }
  }
  return nilai

}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99