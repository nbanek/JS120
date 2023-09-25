function School() {
  return {
    students : [],

    addStudent: function(name, year) {
      if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
        let student = createStudent(name, year);
        this.students.push(student);
        return student;
      } else {
        console.log('Invalid Year');
      }
    },

    enrollStudent: function(student, courseName, courseCode) {
      student.addCourse({name: courseName, code: courseCode})
    },

    addGrade(student, courseName, grade) {
      student[courseName] = grade;
    }

  }
}

function createStudent(name, year) {
  return {
    name,
    year,
    courses : [],

    info() {
      console.log(`${this.name} is a ${this.year} student.`);
    },

    addCourse(obj) {
      this.courses.push(obj);
    },

    listCourses() {
      console.log(this.courses);
    },

    addNote(code, note) {
      let courseToNote = this.courses.filter(course => {
        return course['code'] === code;
      })[0];

      if(courseToNote) {
        if(courseToNote['note']) {
          courseToNote['note'] += `; ${note}`;
        } else {
          courseToNote['note'] = note;
        }
      }
    },

    viewNotes() {
      this.courses.forEach(course => {
        if(course['note']) {
          console.log(`${course['name']}: ${course['note']}`);
        }
      })
    },

    updateNote(code, note) {
      let courseToNote = this.courses.filter(course => {
        return course['code'] === code;
      })[0];

      if(courseToNote) {
        if(courseToNote['note']) {
          courseToNote['note'] = note;
        }
      }
    }
  }
}



// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects



const school = School();
let foo = school.addStudent('foo', '3rd');
let bar = school.addStudent('bar', '1st');
let qux = school.addStudent('qux', '2nd');
school.enrollStudent(foo, 'Math', 101);
school.addGrade(foo, 'Math', 90);
console.log(foo);
