export default class Person {
  name = "";

  age = undefined;

  constructor(name, dob) {
    this.name = name;
    this.dob = dob;
  }

  getAge() {

  }

  getSolarYears() {
    let output = {};
    output.ageMercury = parseFloat((this.age / .24).toFixed(2));
    output.ageVenus = parseFloat((this.age / .62).toFixed(2));
    output.ageMars = parseFloat((this.age / 1.88).toFixed(2));
    output.ageJupiter = parseFloat((this.age / 11.86).toFixed(2));
    return output;
  }
}