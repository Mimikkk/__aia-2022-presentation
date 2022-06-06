export {};

// To jest efekt. To wszystko.
interface Effect<T> {}

// To jest efektowna lista.
interface ListEffect<T> extends Array<T> {}

// To jest efektowna opcja.
type OptionEffect<T> = T | undefined;

// To jest efektowny wynik.
type ResultEffect<T> =
  | {
      value: T;
    }
  | {
      error: Error;
    };

// To jest podnoszenie z jednego świata do drugiego.
export const toList = <T>(value: T): ListEffect<T> => [value];

// To jest opuszczanie ( redukcja ) z drugiego świata do pierwszego.
// Często jest stratne i nieodwracalne. ale nie zawsze.
export const first = <T>(list: ListEffect<T>): OptionEffect<T> => list[0];

// Łacznie Efekt i funkcja podnosząca tworzy Funktor.
export const toResult = <T>(value: T): ResultEffect<T> => ({
  value,
});

// Bindowanie Efektu to funkcja, która przyjmuje Efekt
// i zwraca Efekt z innego świata. Czyli nasze toList oraz first.

// Kompozycja Kleisli. Czyli jak łączy się efekty bardziej złożone.
// Jak wcześniej mówiłem o monoidzie złożonym z list. to okej, ale
// mamy więcej operacji na listach i wtedy wchodzi aplikatyw.

// Aplikatyw to jest są sposoby kombinacji efektów między sobą, które wykonują
// tą samą operację. np łączenie list.
// łączenie list może się odbyć na kilka sposobów. ( nieskończoność )
// [1,2,3] operacja ["a","b","c"] = ???

// [1,2,3] cross ["a","b","c"] =
// [ [1,"a"], [2,"a"], [3,"a"],
//   [1,"b"], [2,"b"], [3,"b"],
//   [1,"c"], [2,"c"], [3,"c"] ]
// [1,2,3] zip ["a","b","c"] =
// [ [1,"a"], [2,"b"], [3,"c"] ]
// [1,2,3] concat ["a","b","c"] =
// [1, 2, 3, "a", "b", "c"]

// Wszystkie mają swoje zastosowania.
// Aplikatyw to funktor, który przenosi efekt do innego świata.
// o różnych implementacjach.

// Currying to jest funkcja, która rozbija funkcję przyjmującą argumenty
// na wiele funkcji przyjmujących argumenty. Czyli możemy zrobić segmentacje
// i paraleizację operacji .
const add = (a: number, b: number) => a + b;
const add2 = (n: number) => add(n, 2);

// Podsumowując wszystkie nasze rzeczy, o których dzisiaj mówiłem to
// jest nasze kolejne narzędzie do obrabiania wszelkich danych.

// Funkcja jako mapa z jednego świata do drugiego.
// iterator jako iteracja po listach.
// monoid jako ogólny zbiór, który zachowuje 3 wcześniej opisane kontrakty.
// które można implementować w wszelki sposób.
// monad jako zbiór monoidów robiących jedną rzecz.
// efekt jako typ generyczny.
// funktor jako funkcja określająca zachodzące relację między światem.
// aplikatyw jako funktor, który przenosi z świata do świata,
// na wszelkie sposoby.
// kompozycja jako kolejność operacji.
// currying jako segmentacja funkcji.

// W javascriptcie mamy funkcje, które tworzą podstawę naszego doświadczenia
// funkcyjnego, które mogą być często łączone w jedną jednostkę działania.
// chowając niepotrzebną implementację na rzecz deklaratywnego mówienia co się
// dzieje z naszymi danymi.
const values = [1, 2, 3];
//@ts-expect-error
values.reduce();
//@ts-expect-error
values.reduceRight();
//@ts-expect-error
values.filter();
//@ts-expect-error
values.every();
//@ts-expect-error
values.some();
//@ts-expect-error
values.find();
//@ts-expect-error
values.findIndex();
//@ts-expect-error
values.forEach();
//@ts-expect-error
values.map();
