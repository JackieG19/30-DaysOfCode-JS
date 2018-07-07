function readLine() {
    return input_stdin_array[input_currentline++];
}

function Person(initialAge){
    // Add some more code to run some checks on initialAge
var age = initialAge;
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
    if(age > -1 && age < 13){
        console.log('You are young.');
    } else if(age >= 13 && age < 18){
        console.log('You are a teenager.');
    } else if (age >= 18){
        console.log('You are old.');
    } else {
        console.log('Age is not valid, setting age to 0.');
        age = 0;
        this.amIOld();
    }
  };
   this.yearPasses=function(){
          // Increment the age of the person in here
       age ++;
   };
}

function main() {

var T=parseInt(readLine());
for(i=0;i<T;i++){
    var age=parseInt(readLine());
    var p=new Person(age);
    p.amIOld();
    for(j=0;j<3;j++){
        p.yearPasses();
        
    }
    p.amIOld();
    console.log("");   
    }
}

