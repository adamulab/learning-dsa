// PROBLEM 1 === Create an array with 5 students name, after that create a function which takes 2 parameters (allStudents & studentName), iterate over all students and find that specific user "studentName"

// Data Structure
const studentsDB = ["Adamu", "Abubakar", "Muhammad", "Idris", "Yusuf"];

// Algorithm
function students(allSTudents, studentName) {
  for (let i = 0; i < allSTudents.length; i++) {
    if (allSTudents[i] === studentName) {
      console.log(`Found ${studentName}`);
    }
  }
}

students(studentsDB, "Idris");
