const { area, perimeter } = require('../problems/02-squareFacts');

describe('area', () => {
  it('should return the area of a square with the side length equal to the sideLength parameter', () => {
    expect(area(5)).toEqual(25);
    expect(area(7)).toEqual(49);
  });
});

describe('perimeter', () => {
  it('should return the perimiter of a square with the side length equal to the sideLength parameter', () => {
    expect(perimeter(9)).toEqual(36);
    expect(perimeter(3)).toEqual(12);
  });
});
