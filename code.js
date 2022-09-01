
function namecheck() {
    var firstname = document.getElementById('firstname').value;
    if(firstname === ''){
        alert("You submitted an empty box, please enter your name")
    }else {
        alert (`welcome to side huslte internship ${firstname}`)
    }
}


function block(){
    var blockCode = document.getElementById('block')
    var numCode = document.getElementById('num')

    let numberLoop = '';
    let numLoop = '';

  for ( let i=0; i<10; i++){
    numberLoop += '<div> i am great </div>'
  }
//for(let num = 1; num < 20; num++){
 // document.write(num, "<br/>")
//}
for(let num = 1; num <= 200; num++)
  if (num % 2 == 0){
    document.write("Even <br/>");
  }
  else if (num % 3 == 0){
    document.write("odd <br/>");
  }

  else {
    document.write(num, "<br/>");
  }

  let count =1;
  while(count < 20){
    //numLoop += '<div> $(count) </div>'
   document.write("count")
    count +=2;
  }
  blockCode.innerHTML = numberLoop
  numCode.innerHTML = numLoop
}

//do{
  // document.write(count, " Do While loop < br/>")
    //count++;
//} while(count < 10)

block()

let scores = 65;

if (scores >= 75 && scores <= 100){
  console.log("FIRST CLASS UPPER");
}

else if (scores >= 65 && scores <= 74){
  console.log("SECOND CLASS UPPER");
}

else if (scores >= 50 && scores <= 64){
  console.log("SECOND CLASS LOWER");
}

else if (scores >= 41 && scores <= 49){
  console.log("THIRD CLASS");
}

else if (scores >= 30 && scores <= 40){
  console.log("PASS");
}

else {
  console.log("FAIL...ASKED TO WITHDRAW");
}

function add(a , b){
  document.write(a+b);
} 

add(15,6)


//array

let colors = ['red', 'green', 'blue','yellow', 'black','brown']

let mountain = ['Everest', 'Fuji', 'Nanga Parbat']
mountain[1] = 'Kilimanjaro';
document.write(colors[3])
document.write(mountain.length)
//objects
let emptyObject = {}
let person = {
  firstName : "Esther",
  lastName : "Oyenuga",
  age : 26,
  occupation : 'Software Engineer'
}

document.write(person.firstName, '', person.lastName) 

document.write(person['age'])

//nested object


let student ={
  name : 'Esther Oyenuga',
  age : 26,
  marks : {
    science : 80,
    math : 95
  }
}
//console.log(student.marks)
//document.write(student.marks['math'])

student.name = 'Esther Adejumoke'
console.log(student)
document.write(student['name'])

person.maritalStatus = 'Single'
person['role'] = "Fullstack Software Engineer"

console.log(person)