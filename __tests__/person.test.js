import Person from './../src/js/person.js';

describe('Person', () => {
  let billy;
  let solarYears;
  
  beforeEach(() => {
    billy = new Person("Billy", 31);
    let solarYears = {};
    solarYears = billy.getSolarYears();
  });
  
  test('should correctly create a Person object with their name and age', () => {
    expect(billy.name).toEqual("Billy");
    expect(billy.age).toEqual(31);
  });

  test('should correctly calculate the persons age in Mercury years', () => {
    console.log("the return" + "solarYears");
    expect(solarYears.ageMercury).toEqual(129.17);
  });

  test('should correctly calculate the persons age in years for Mercury, venus, mars and jupiter', () => {
    expect(solarYears.ageMercury).toEqual(129.17);
    expect(solarYears.ageVenus).toEqual(50);
    expect(solarYears.ageMars).toEqual(16.49);
    expect(solarYears.ageJupiter).toEqual(2.61);
  });
});