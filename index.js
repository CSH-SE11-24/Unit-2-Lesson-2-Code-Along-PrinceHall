// IF STATEMENT REVIEW
// Day of the Week: Prompt the user to enter a day of the week (e.g., "Monday") and say whether it's a weekday or the weekend.

let user = prompt("What's the day of the week?")

user = user.toLowerCase()


if(user === "saturday"|| user === "sunday"){
  console.log("It's a weekend")
}

else {
  console.log("its a weekend, yay school!!!")
}



// Age Group Classifier: Prompt the user to enter their age and categorize them into different age groups (child, teen, adult, senior)

let age = prompt("What is your age")

age = parseInt(age)

if(age<=0){
  console.log("that's not a child")
}

else if(age<=12){
  console.log("You are a child")
}

else if(age<=19){
  console.log("you are a teen")
}

else {
  console.log("RIP you lived a good life")
}

// WHILE LOOPS
// Print 1 to 5

let i = 1
while(i<6){
  console.log(i)
  i++
}

// Print from a certain number to 1

let user2 = prompt("Enter a number")

user2 = parseInt(user2)

while(user2>0){
  console.log(user2)
  user2--
}

// Summing up to 5

let sum = 0
let counter = 1

while(counter<=5){
  sum = counter + sum
  counter++
}


let mysterystudent = "zyaire"

let studentguess = prompt("Guess a student").toLowerCase()

while(studentguess!== mysterystudent){
  studentguess = prompt("Try again different student")
}
console.log("Good job")

// Using prompt




