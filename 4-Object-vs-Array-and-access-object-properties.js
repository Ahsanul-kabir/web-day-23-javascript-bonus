//onk gula information er collection both Array & Object


// Same type er data rakte caile Array e valo
var friendAge = [12, 15, 14, 17, 21]; // way of same type er data array te rakhar and organized;




// way of using object , likes specific person er data
// var ami = [12,55,65,'Navyblue'] --> emni bole ami bujtesi nah ami ki bolsi tai "Object" dorkar
var ami2 = {
    age: 23,
    weight: 85,
    height: 65,
    color: 'Navyblue'
}
var myAge = ami2.age; // way of access Object
console.log(myAge);

var myWeight = ami2['weight']; // another way
console.log(myWeight);

var lookingFor = 'age';
var myAge = ami2[lookingFor];
console.log(myAge);


// for update any value
ami2.age = 20; // way of update 
console.log(myAge);

ami2['weight'] = 95; // way
console.log(myWeight);

ami2[lookingFor] = 25; // way
console.log(myAge);

console.log(ami2);