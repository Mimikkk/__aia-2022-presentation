export {};

Iteracja to najbardziej podstawowy kocept, który jest wszystkim
znany pod przykrywką pętl. najczęściej pisanych jako jakaś for
często też jest uproszczana do postaci jakiegoś foreach'a

Nasze przykładowe wartości

let values: number[] = [1, 2, 3];

I to jest iteracja po naszych wartościach
proste typowe, ale może być prostsze za pomocą iteratorów

for (let i = 0; i < 10; i++) {
  console.log(i);
}
for (let i of values) {
  console.log(i);
}

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

console.log(values[Symbol.iterator]());

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
[1,2,3].forEach(console.log);


