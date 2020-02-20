var s = new Set([1, 2, 3])
var s2 = new Set([2, 3, 4])


// s.forEach(function(v1, v2, set){
//   console.log(v1);
//   console.log(v2);
//   console.log(set);
// })

var union = new Set([...s, ...s2]);

// similar to array
var arr = [1, 2, 3];
var brr = [4, 5, 6];
var crr = [...arr, ...brr];

var intersection = new Set([...s].filter(x => s2.has(x)));

var diff = new Set([...s].filter(x => !s2.has(x)));

// how filter works
var arr2 = [1, 2, 3, 4, 5, -1, -2];

var arr3 = arr2.filter(function(value){
  if(value < 0){
    return true;
  }
})
var btn = document.getElementById('test');
var btn2 = document.getElementById('test2');
btn.addEventListener('click', function(e){
  console.log(this) // this is the element
})
btn2.addEventListener('click', (e)=>{
  console.log(this) // this is window
})

var test = ()=>{
  console.log(this);
}
var test2 = function(){
  console.log(this);
}
///////////////////////////////////////////////

var ws = new WeakSet();

var a = {name: 'bru'}

ws.add(a)