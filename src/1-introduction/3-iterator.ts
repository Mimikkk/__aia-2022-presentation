export {};

let values: number[] = [1, 2, 3];

for (let index = 0; index < values.length; index++) {
  console.log(values[index]);
}
for (let value of values) {
  console.log(value);
}
values.forEach(console.log);

console.log(values[Symbol.iterator]());
const iterator: IterableIterator<number> = values[Symbol.iterator]();

const foreachIterator = <T>(
  iterator: Iterator<T>,
  callable: (item: T) => void,
) => {
  let result = iterator.next();

  while (!result.done) {
    callable(result.value);
    result = iterator.next();
  }
};

foreachIterator(values[Symbol.iterator](), console.log);
for (const value of values[Symbol.iterator]()) {
  console.log(value);
}

const foreachIterable = <T>(
  iterable: Iterable<T>,
  callable: (item: T) => void,
) => foreachIterator(iterable[Symbol.iterator](), callable);

foreachIterable(values, console.log);
for (const value of values) {
  console.log(value);
}

//@ts-expect-error
Array.prototype.foreachIterable = function <T>(callable: (item: T) => void) {
  foreachIterable(this, callable);
};

values.forEach(console.log);
//@ts-expect-error
values.foreachIterable(console.log);
