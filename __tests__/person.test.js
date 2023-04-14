import Person from './../src/js/person.js';

describe('Person', () => {
  let billy;
  let ages;
  
  beforeEach(() => {
    billy = new Person("Billy", [4, 14, 1991]);
    ages = {};
    ages = billy.getAges();
  });
  
  test('should correctly create a Person object with their name and date of birth', () => {
    expect(billy.name).toEqual("Billy");
    expect(billy.dob.getFullYear()).toEqual(1991);
  });
  
  test('should calculate the persons age', () => {
    expect(ages.name).toEqual("Billy");
    expect(ages.ageEarth).toEqual(32);
  });

  // test('should correctly calculate the persons age in Mercury years', () => {
  //   expect(ages.ageMercury).toEqual(129.17);
  // });

  // test('should correctly calculate the persons age in years for Mercury, venus, mars and jupiter', () => {
  //   expect(ages.ageMercury).toEqual(129.17);
  //   expect(ages.ageVenus).toEqual(50);
  //   expect(ages.ageMars).toEqual(16.49);
  //   expect(ages.ageJupiter).toEqual(2.61);
  // });
});