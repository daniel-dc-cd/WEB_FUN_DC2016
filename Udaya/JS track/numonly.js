function numonly(arr){
  var arrnew =[];
  for(var i =0;i<arr.length; i++){
   var temp = typeof arr[i];
if(temp === "number")
{
  arrnew.push(arr[i]);

}
  }
  console.log(arrnew);
}
numonly(["banana",2,3,-1,"apple",2]);
