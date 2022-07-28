let isEven = require('../problems/01-isEven');

describe('isEven', () => {
  it('returns a boolean', () => {
    expect(isEven(3)).toEqual(expect.any(Boolean));
  });

  it('returns true if even and false if odd', () => {
    expect(isEven(3)).toBe(false);
    expect(isEven(4)).toBe(true);
    expect(isEven(30000001)).toBe(false);
  });
});
