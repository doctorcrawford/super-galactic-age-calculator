import Person from './../src/js/person.js';

describe('Person', () => {
  let billy;
  
  beforeEach(() => {
    billy = new Person("Billy", 31);
    billy.getSolarYears();
  })
  
  test('should correctly create a Person object with their name and age', () => {
    expect(billy.name).toEqual("Billy");
    expect(billy.age).toEqual(31);
  });

  test('should correctly calculate the persons age in Mercury years', () => {
    expect(billy.ageMercury).toEqual(129.17);
  });

  test('should correctly calculate the persons age in years for Mercury, venus, mars and jupiter', () => {
    expect(billy.ageMercury).toEqual(129.17);
    expect(billy.ageVenus).toEqual(50);
    expect(billy.ageMars).toEqual(16.49);
    expect(billy.ageJupiter).toEqual(2.61);
  });
});