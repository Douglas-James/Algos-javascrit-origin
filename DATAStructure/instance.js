class Student{
  constructor(firstName, lastName, year){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.late = 0;
    this.score = []
  }
  fullName(){
    return `Full Nam: ${this.firstName} ${this.lastName}`;
  }
  markLate(){
    this.late += 1;
    if(this.late >= 3){
      return "You Have be Expelled!!!: ("
    }
    return `Late ${this.firstName} ${this.lastName} has been missing class ${this.late} time`
  }

  addscore(score){
    if(this.late >= 3){
      return "Sorry the data student has been Deleted"
    }
    this.score.push(score)
    return this.score
  }

  calculateAverge(){
    if(this.late >= 3){
      return "The Data for this Student has been Removed"
    }
    let sum = this.score.reduce(function(a, b) {return a+b})
    return sum/this.score.length
  }
  
  // static Method not instance method
  static EntrollStudent(){
    return `Enrolling Student`
  }
}


let firstStudent = new Student("ABC", "DE", 2);
let secondStudent = new Student("CDE", "FE", 1);

console.log(firstStudent.fullName());

// Mark late instance amd addascore
console.log(firstStudent.markLate())
console.log(firstStudent.markLate())
console.log(firstStudent.markLate())
console.log(firstStudent.addscore(100, 23))
console.log(firstStudent.calculateAverge())
// console.log(firstStudent.EntrollStudent())

secondStudent.addscore(100)
secondStudent.addscore(78)
console.log(secondStudent.calculateAverge())

// Static method
console.log(Student.EntrollStudent())