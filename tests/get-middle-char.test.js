const getMiddle = require('../problems/03-get-middle-char');

describe('getMiddle', () => {
  it('should return a string', () => {
    const answer = getMiddle('puppy');
    expect(typeof answer).toBe('string');
  });

  it('should return the middle character if the input string contains an odd number of characters', () => {
    expect(getMiddle('hello')).toBe('l');
    expect(getMiddle('dry')).toBe('r');
  });

  it('should return the middle two characters if the input string contains an even number of characters', () => {
    expect(getMiddle('even')).toBe('ve');
    expect(getMiddle('poured')).toBe('ur');
  });

  it('should return an empty string if the input string was empty', () => {
    expect(getMiddle('')).toBe('');
  });
});
