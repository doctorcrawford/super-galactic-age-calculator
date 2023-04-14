export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  } 

  getSolarYears() {
    this.ageMercury = parseFloat((this.age / .24).toFixed(2));
    this.ageVenus = parseFloat((this.age / .62).toFixed(2));
    this.ageMars = parseFloat((this.age / 1.88).toFixed(2));
    this.ageJupiter = parseFloat((this.age / 11.86).toFixed(2));
  }
}