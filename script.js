const students = []

function addStudent(){
  const name=prompt("Enter the student's name : ")
  const grade=parseInt(prompt("Enter the student's grade : "))
  const className=prompt("Enter the class name : ")
  const student={
    name: name,
    grade: grade,
    className: className
  }
  students.push(student)
  alert('Student added!')
}

function viewStudent(){
  let studentList = 'List of students: \n'
  for (const student of students){
    studentList += `${student.name}, ${student.grade}, ${student.className} \n` 
  }

  alert(studentList)
}