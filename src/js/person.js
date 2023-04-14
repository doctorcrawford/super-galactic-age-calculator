export default class Person {
  name = "";
  age = undefined;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getSolarYears() {
    let output = {};
    solarYears.ageMercury = parseFloat((this.age / .24).toFixed(2));
    solarYears.ageVenus = parseFloat((this.age / .62).toFixed(2));
    solarYears.ageMars = parseFloat((this.age / 1.88).toFixed(2));
    solarYears.ageJupiter = parseFloat((this.age / 11.86).toFixed(2));
    return output;
  }
}