/**
 * Some Notes:
 * 1. The area of a square is equal to the length of its side squared.
 * 2. The perimiter of a square is equal 4 times the length of its side.
 */

function area(n) {
  return n * n;
}

function perimeter(n) {
  return 4 * n;
}

// do not touch this export
module.exports = { area, perimeter };
