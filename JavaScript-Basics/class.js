/* --------------------------------------------------- */
/***** CLASS *****/ 
/* --------------------------------------------------- */

class PersonClass {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    //getter setter in class
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    set fullName(value) {
        var nameParts = value.split(" ");
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
    }

    //functions in class
    isAdult() {
        return this.age >= 18;
    }
}

class Student extends PersonClass {
    constructor(firstName, lastName, age) {
        super(firstName, lastName, age);
        this.enrolledCourses = [];
    }

    //static function
    static fromPerson(person) {
        return new Student(person.firstName, person.lastName, person.age);
    }

    enroll(courseId) {
        this.enrolledCourses.push(courseId);
    }

    getCourses() {
        return this.fullName + "'s enrolled courses are: " + this.enrolledCourses.join(', ');
    }
}

Object.defineProperty(PersonClass.prototype, 'fullName', {enumerable:true});

let person = new PersonClass('Jim', 'Cooper', 29);
console.log("Jim: ", person);
console.log("Jim is adult: ", person.isAdult());

console.log("");

let student = new Student('Sofia', 'Cooper', 21);
console.log('Student Object:', student );
student.enroll('CS101');
student.enroll('MH201');
student.enroll("PH205");
console.log(student.getCourses());

console.log("");

let personStudent = Student.fromPerson(person);
console.log("Student object created from Person object: ", personStudent);


var myFiniteIterator = {
    [Symbol.iterator]: () => ({
      elements: ['Apple', 'Grape', 'Kiwis', 'Monke', 'Lions', 'Tiger'],
      next: function next () {
        return {
          done: this.elements.length === 0,
          value: this.elements.shift()
        }
      }
    })
  }

  for (let ele of myFiniteIterator) {
    console.log(ele + " " + ele.length);
    if (ele.length % 2 == 0) {
        console.log('If: ', ele);
        continue
    } else {
        console.log('Else: ',ele)
        break
    }
}