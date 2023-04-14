export default class Person {
  name = "";
  age = undefined;

  constructor(name, dob) {
    this.name = name;
    this.dob = new Date(dob);
  }

  // twoDecimals(age, planetYear) {
  //   parseFloat(age / planetYear).toFixed(2);
  // }

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
    const ages = this.getAges();
    output.passedEarth = ages.ageEarth - pastAge;
    output.passedMercury = parseFloat(((output.passedEarth) / .24).toFixed(2));
    output.passedVenus = parseFloat(((output.passedEarth) / .62).toFixed(2));
    output.passedMars = parseFloat(((output.passedEarth) / 1.88).toFixed(2));
    output.passedJupiter = parseFloat(((output.passedEarth) / 11.86).toFixed(2));
    return output;
  }
}