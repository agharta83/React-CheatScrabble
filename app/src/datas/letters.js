/*
 * Npm import
 */


/*
 * Local import
 */

/*
 * Datas
 */
const frequency = {
  a: 9,
  b: 2,
  c: 2,
  d: 3,
  e: 15,
  f: 2,
  g: 2,
  h: 2,
  i: 8,
  j: 1,
  k: 1,
  l: 5,
  m: 3,
  n: 6,
  o: 6,
  p: 2,
  q: 1,
  r: 6,
  s: 6,
  t: 6,
  u: 6,
  v: 2,
  w: 1,
  x: 1,
  y: 1,
  z: 1,
  ' ': 2,
};

const points = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 10,
  l: 1,
  m: 2,
  n: 1,
  o: 1,
  p: 3,
  q: 8,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 10,
  x: 10,
  y: 10,
  z: 10,
  ' ': 0,
};


/*
 * Functions
 */
export const getLetterPoints = letter => points[letter];

export const isLetter = piece => piece in points;
