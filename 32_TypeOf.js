// Usando Typeof

//var test = typeof("what is this?"); //string

//var test = typeof(10); //number

//var test = typeof(3.14); //number

//var test = typeof(true); //boolean

//var test = typeof(false); //boolean

//var test = typeof(1 < 2); //boolean

//var test = typeof([1,2,3]); //object

//var test = typeof({ firstProperty: 1}); //object

var test = typeof(function abc() { console.log("abc");}); //function

console.log(test);