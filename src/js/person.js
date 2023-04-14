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

  getYearsDiff(yearsOff) {
    const output = {};
    const ages = this.getAges();
    const ageDiff = ages.ageEarth - yearsOff;
    if (ageDiff > 0){
      output.earthDiff = ageDiff;
    } else if (ageDiff < 0) {
      output.earthDiff = -(ageDiff);
    }
    output.mercuryDiff = parseFloat(((output.earthDiff) / .24).toFixed(2));
    output.venusDiff = parseFloat(((output.earthDiff) / .62).toFixed(2));
    output.marsDiff = parseFloat(((output.earthDiff) / 1.88).toFixed(2));
    output.jupiterDiff = parseFloat(((output.earthDiff) / 11.86).toFixed(2));
    return output;
  }
}