import * as faker from 'faker';

export function formatDate(date) {
  return date.toISOString().substr(0, 10);
}

export function fromList(list) {
  return faker.random.arrayElement(Object.keys(list));
}

export function intoArray(max, body) {
  return new Array(faker.random.number(max - 1) + 1)
    .fill()
    .map(typeof body === 'function' ? body : () => body);
}
