//First Problem//
let light = "Edis";
if (light === "green"){
    console.log("Go");
} else if (light === "Yellow"){
    console.log("Caution!");
} else {
    console.log("Stop");
}

//Second Problem//
let kristyIntolerant = true;
let baoBaoIntolerant = true;
if(kristyIntolerant === true || 
    baoBaoIntolerant === true) {
    console.log("Get Almond Milks");
} else if(kristyIntolerant === true 
    || baoBaoIntolerant === true)
    {
console.log("Get Both Milks");
    } else {
    console.log("Just Regular Milk");
    }

//Third Problem//
let temp = 67;
if (temp < 68) {
    console.log("Too Cold");
} else if (temp >= 68 && temp <= 72){
    console.log("Perfect");
} else if (temp > 72 && temp <= 76){
    console.log("Is Warm");
}

const Riya = {
    name: "Riya",
    dob: 2003,
    graduated: false,
    age: function() {
        console.log(this);
        return 2020 - Riya.dob;
    }
}