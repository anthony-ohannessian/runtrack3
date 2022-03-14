function tri(numbers, order) {
    if (order == "ASC") {
      return numbers.sort(function(a,b){return a-b});
    }
    else if (order == "DESC") {
     return numbers.sort(function(a,b){return a-b}).reverse(); 
    }
  }
  var numbers = [ 
    87,
    58,
    46,
    72,
    11,
    47,
    96,
    122,
    333,
    111,
    222,
    444,
    555,
    666,
    777,
    888,
    999,
  ];
  
  var order = "DESC"; 
//   var order = "ASC"; 
  
  console.log(tri(numbers, order));