import Person from './../src/js/person.js';

describe('Person', () => {
  let billy;
  
  beforeEach(() => {
    billy = new Person("Billy", 31);
  })
  
  test('should correctly create a Person object with their name and age', () => {
    expect(billy.name).toEqual("Billy");
    expect(billy.age).toEqual(31);
  });

  test('should correctly calculate the persons age in Mercury years', () => {
    billy.getSolarYears();
    expect(billy.ageMercury).toEqual(129.17);
  });
});