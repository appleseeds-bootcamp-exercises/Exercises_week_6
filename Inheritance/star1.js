class Student {
  constructor(name, courses) {
    this.name = name;
    this.courses = courses;
  }
}
class Programmer extends Student {
  constructor(name, courses, oS, languages, vCS) {
    super(name, courses);
    this.oS = oS;
    this.languages = languages;
    this.vCS = vCS;
  }
  isProgramming(language) {
    for (let index = 0; index < this.languages.length; index++) {
      if (this.languages[index] === language) return true;
    }
    return false;
  }
}
function findOurProgrammer(students, language) {
  for (let index = 0; index < students.length; index++) {
    if (students[index] instanceof Programmer) {
      if (students[index].isProgramming(language)) {
        return students[index];
      }
    }
  }
  return null;
}

var students = [];
students.push(new Student("sap", ["english", "math"]));
students.push(new Student("bap", ["english", "math"]));
students.push(new Programmer("dap", ["math"], "ios", ["ruby", "js"], 1.1));
students.push(
  new Programmer("cap", ["english"], "windows", ["ruby", "java"], 1.6)
);
console.log(findOurProgrammer(students, "js"));
