import Person from './../src/js/person.js';

describe('Person', () => {

  test('should correctly create a Person object with their name and age', () => {
    const billy = new Person("Billy", 31);
    expect(billy.name).toEqual("Billy");
    expect(billy.age).toEqual(31);
  });
});