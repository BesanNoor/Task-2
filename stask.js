//ביסאם פרח 211861208
//נור צובח 214459463
//מדפיסה את כל המספרים הראשוניים שערכם קטן מהמספר 237
for (let num =2; num < 237; num++) {
  let flag = true;
  for (let i= 2; i<= Math.sqrt(num); i++){
    if (num % i === 0){
      flag = false
      break;
    }
  }
if (flag){
  console.log(num)
   }

}
