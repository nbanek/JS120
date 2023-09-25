function createStudent (name, year) {
  return {
    name,
    year,
    courses : [],

    info() {
      return `${this.name}, ${this.year}.`
    },
    
    addCourse(course) {
      this.courses.push(course);
    },

    listCourses() {
      return this.courses;
    },

    addNote(courseCode, note) {
      let test = this.courses.filter(course => {
        return course.code === courseCode;
      })[0];
      if(test['note']) {
        test['note'] += '; ' + note;
      } else {
        test['note'] = note;
      }
    },

    updateNote(courseCode, note) {

    }
  }
}


let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
console.log(foo.listCourses());
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
console.log(foo.listCourses());
// foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// // "Advance Math: Difficult subject"
// foo.updateNote(101, 'Fun course');
// foo.viewNotes();
// // "Math: Fun course"
// // "Advanced Math: Difficult subject"