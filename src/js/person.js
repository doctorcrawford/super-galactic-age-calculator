export default class Person {
  name = "";
  age = undefined;

  constructor(name, dob) {
    this.name = name;
    this.dob = new Date(dob);
  }

  twoDigits(inputNum, yearDiv) {
    return parseFloat((inputNum / yearDiv).toFixed(2));
  }

  getAges() {
    const output = {};
    const today = new Date();
    output.ageEarth = today.getFullYear() - this.dob.getFullYear();
    output.ageMercury = this.twoDigits(output.ageEarth, .24);
    output.ageVenus = this.twoDigits(output.ageEarth, .62);
    output.ageMars = this.twoDigits(output.ageEarth, 1.88);
    output.ageJupiter = this.twoDigits(output.ageEarth, 11.86);
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
    output.mercuryDiff = this.twoDigits(output.earthDiff, .24);
    output.venusDiff = this.twoDigits(output.earthDiff, .62);
    output.marsDiff = this.twoDigits(output.earthDiff, 1.88);
    output.jupiterDiff = this.twoDigits(output.earthDiff, 11.86);
    return output;
  }
}