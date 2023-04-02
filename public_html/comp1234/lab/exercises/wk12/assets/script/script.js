//Ask user input name
let studentName = prompt('Enter Your Name Please: ', 'Enter your Name Please');

//Ask user input student ID
let studentId = prompt('Enter Your Student Number please: ', 'Student ID');

//Ask user input number, if it's not number will ask again
do {
    number = prompt('Enter any number from 1 - 9');
}
while (isNaN(number) || number < 1 || number >9);

//Print the Name and student Id user input
document.write('<b>My name is  </b>' + studentName + '<br>');
document.write('<b>My Student ID is  </b>' + studentId + '<br>' + '<br>');

//Print the number
for (let i = 1; i<=number; i++){
    for (let k = 1; k<=i; k++){
        document.write(k);
    }
    document.write('<br>');
}


