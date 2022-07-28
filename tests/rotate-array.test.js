const rotate = require('../problems/04-rotate-array');

describe('rotate', () => {
  it('should return an array', () => {
    expect(rotate([])).toBeInstanceOf(Array);
  });

  it('should return the original array', () => {
    let input = [];

    expect(rotate([])).toBeInstanceOf(Array);
    expect(rotate(input)).toBe(input);
  });

  it('It should remove the first element of the array and move it to the last element of the array', () => {
    expect(rotate([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5, 1]);
    expect(rotate([6, 7, 8, 9])).toEqual([7, 8, 9, 6]);
  });
});
