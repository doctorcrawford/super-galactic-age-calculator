import Person from './../src/js/person.js';

describe('Person', () => {
  let billy;
  let ages;
  let agesDiff;

  
  beforeEach(() => {
    billy = new Person("Billy", [4, 14, 1991]);
    ages = {};
    ages = billy.getAges();
    agesDiff = {};
  });
  
  test('should correctly create a Person object with their name and date of birth', () => {
    expect(billy.name).toEqual("Billy");
    expect(billy.dob.getFullYear()).toEqual(1991);
  });
  
  test('should calculate the persons age', () => {
    expect(ages.ageEarth).toEqual(32);
  });

  test('should correctly calculate the persons age in Mercury years', () => {
    expect(ages.ageMercury).toEqual(133.33);
  });

  test('should correctly calculate the persons age in years for Mercury, venus, mars and jupiter', () => {
    expect(ages.ageMercury).toEqual(133.33);
    expect(ages.ageVenus).toEqual(51.61);
    expect(ages.ageMars).toEqual(17.02);
    expect(ages.ageJupiter).toEqual(2.70);
  });

  test('should correctly calculate the years passed from the inputted age to today', () => {
    agesDiff = billy.getYearsDiff(10);
    expect(agesDiff.earthDiff).toEqual(22);
  });

  test('should correctly calculate the years passed for all planets from the inputted age to today', () => {
    agesDiff = billy.getYearsDiff(10);
    expect(agesDiff.mercuryDiff).toEqual(91.67);
    expect(agesDiff.venusDiff).toEqual(35.48);
    expect(agesDiff.marsDiff).toEqual(11.7);
    expect(agesDiff.jupiterDiff).toEqual(1.85);
  });

  test('should correctly calculate the years until a future birthday for earth', () => {
    agesDiff = billy.getYearsDiff(42);
    expect(agesDiff.earthDiff).toEqual(10);
  });
});