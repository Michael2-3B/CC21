var counter = document.getElementById("counter");

//This function doesn't work, due to the way javascript handles PI and numbers in general
//Need an actual algorithm rather than using Math.PI
function getDigit(i){
  var result;
  if(i==1)
    result = 3;
  else
    result = parseInt(Math.PI * (10 ** (i-1))) - parseInt(Math.PI * (10 ** (i-2))) * 10;
  return result;
}
