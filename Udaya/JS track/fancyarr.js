var arr = ["James", "jil","jane"];
for(var i =0; i<arr.length; i++){
  console.log(+i+ "->" + arr[i]);
}

// alt1 using function



function arr1(arr, sym){
for(var i =0; i<arr.length; i++){
  console.log(+i+ sym+  arr[i]);
}

}

arr1(["james","jane","jil"], "-->");
