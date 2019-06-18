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
    return this.languages.indexOf(language) !== -1;
  }
}
function findOurProgrammer(students, language) {
  for (let index = 0; index < students.length; index++) {
    if (
      students[index] instanceof Programmer &&
      students[index].isProgramming(language)
    ) {
      return students[index];
    }
  }
  return null;
}

var students = [
  new Student("sap", ["english", "math"]),
  new Student("bap", ["english", "math"]),
  new Programmer("dap", ["math"], "ios", ["ruby", "js"], 1.1),
  new Programmer("cap", ["english"], "windows", ["ruby", "java"], 1.6)
];

console.log(findOurProgrammer(students, "js"));
