const add = (x, y) => x + y;

const subs = (x, y) => x - y;

const mult = (x, y) => x * y;

const div = (x, y) => (y == 0 ? "No se puede dividir por cero" : x / y);

export default {
  add,
  subs,
  mult,
  div,
}