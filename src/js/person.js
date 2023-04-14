export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  } 

  getSolarYears() {
    this.ageMercury = parseFloat((this.age / .24).toFixed(2));
  }
}