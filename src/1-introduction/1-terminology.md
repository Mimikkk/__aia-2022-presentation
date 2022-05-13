Programowanie funkcjonalne wydaje się straszne ze względu na ilość matematycznego żargonu i naszej wychowanej
predyspozycji do języków obietkowych.

Terminologia oraz narzędzia, z którymi was zapoznam to:

- function: TODO
- monad: TODO
- monoid: TODO
  - effect: TODO
- applicative: TODO
- functor: TODO
- currying: TODO
- catamorphism: TODO
- iterator: TODO

Brzmi strasznie, ale nie jest to wcale takie złożone. weźmy na początek terminologię związaną nam już znanym czyli
programowaniem obiektowym.

Jesteśmy przyzwyczajeni do myślenia o kodzie w jeden sposób, obiektowy, odrzucając często znaczące elementy funkcji.
Tworzymy masę klas, które robią to samo, ale w różnych sposobach. Bez myślenia, czy to jest potrzebne, bo tak mówi
wzorzec przez co kończymy z fabrykami fabryk, gdzie mielismy tylko pokazać
"hello world" czy "fizzbuzz" na ekranie. Tak samo implementacja jest często nieczytelna co wynika z pokazywania kodu w
jednym miejscu, lub przez fasadowanie go pod bardzo mało znaczącymi nazwami jak FindFirstElementStrategyFactory z
interfejsem IGeneralStrategyFactory o metodzie CreateStrategy zwracającą IGeneralStrategy, która wykonuje jedną rzecz
jaką jest strategy.apply. Gdzie dodatkowo w pamięci tworzymy tylko jeden singleton klasy, który jest użyty tylko raz.

Terminy, które znamy i jesteśmy przyzwyczajeni to:

- struktura
- klasa
- interfejs
- generyczność
- dziedziczenie
- polimorfizm
- kompozycja
- kowariancja
- SOLID ( co znaczy 5 rzeczy ):
    - SRP ( single responsibility principle )
    - OCP ( open-closed principle )
    - LSP ( Liskov substitution principle )
    - ISP ( interface segregation principle )
    - DIP ( dependency inversion principle )
- Wzorce projektowe:
    - Obserwator
    - Mediator
    - Adapter
    - Dekorator
    - Proxy
    - Fasada
    - Komenda
    - ...

Jest ich znacznie więcej niż w programowaniu funkcyjnym, Co nie znaczy, że programowanie funkcyjne obsługuje mniej
przypadków
