let globalX = "Global variable";

function OnSubmit() {
let emailInput = document.getElementById("email");
console.log(emailInput.value);
console.log(document.getElementById("checkbox").checked);
console.log(document.getElementById("select").value)
document.getElementById("userEmail").innerHTML = emailInput.value;
}


//OnSubmit();
//OnSubmit();
//OnSubmit();
//OnSubmit();

function EmailChanged() {
    let emailInput = document.getElementById("email");
    
    if(emailInput.value.length > 0) {
    
    document.getElementById("submitButton").disabled = false;
    } else {
    document.getElementById("submitButton").disabled = true;
    }
    document.getElementById("submitButton").disabled = emailInput.value.length == 0;
}

function AddNumbers(x, y) {    
    //1 + 2 = 3
    console.log(x + " + " + y + "=" + (x + y));
    console.log(`${x} + ${y} = ${x + y}`);
    console.log(globalX);
}

AddNumbers(1, 2);
AddNumbers(10, 5);
AddNumbers(5, 5);

console.log(globalX);

// JavaScript Object Notation - JSON

let student1 = "Dima";
let student2 = "Juku";
let student3 = "Mari";
let studentsArray = ["Dima", "Juku", "Mari"];
let studentsAges = [29, 30, 25];

let student4 = {
    "Name": "Juku",
    "Age": 30,
    "City": "Tallinn",
    "Male": true,
    "Marks": [
        {
            "Subject": "Math",
            "Mark": 5
        },
        {
            "Subject": "PE",
            "Mark": 4
        }
    ]
};

let students = [
    {

    "Name": "Juku",
    "Age": 30,
    "City": "Tallinn",
    "Male": true,
    "Marks": [
        {
            "Subject": "Math",
            "Mark": 5
        },
        {
            "Subject": "PE",
            "Mark": 4
        },
        {    
            "Subject": "Estonian",
             "Mark": 3  
        },
]
}, 
{
    "Name": "Karl",
    "Age": "25",
    "City":"Tallinn",
    "Male": true,
    "Marks": [
        {
            "Subject": "Math",
            "Mark": 3
        },
        {
            "Subject": "PE",
            "Mark": 5
        },
        {    
            "Subject": "Estonian",
             "Mark": 3  
        },
    ]
    }
]
console.log(`${students[0].Name} has ${students[0].Marks[1].Mark} in ${students[0].Marks[1].Subject}`);
console.log("-----------");
for(let i = 0; i < students.length; i++) {
    for(let j = 0; j < students[i].Marks.length; j++) {
        console.log(`${students[i].Name} has ${students[i].Marks[j].Mark} in ${students[i].Marks[j].Subject}`);        
    }
}

