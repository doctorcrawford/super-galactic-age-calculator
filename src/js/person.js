export default class Person {
  name = "";

  age = undefined;

  constructor(name, dob) {
    this.name = name;
    this.dob = new Date(dob);
  }


  getAges() {
    const output = {};
    const today = new Date();
    output.ageEarth = today.getFullYear() - this.dob.getFullYear();
    output.ageMercury = parseFloat((output.ageEarth / .24).toFixed(2));
    output.ageVenus = parseFloat((output.ageEarth / .62).toFixed(2));
    output.ageMars = parseFloat((output.ageEarth / 1.88).toFixed(2));
    output.ageJupiter = parseFloat((output.ageEarth / 11.86).toFixed(2));
    return output;
  }

  getYearsPassed(pastAge) {
    const output = {};

    return output;
  }
}