function foo(bar: number) {
  return bar;
}
const x = 4;

it('should pass', () => {
  expect(foo(1)).toBe(1);
});
