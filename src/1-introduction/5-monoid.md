Monoid. To jest rzecz, która zawiera 3 kontrakty.

Kontrakty:
    - Element Naturalny ( Bez elementu naturalnego mamy pół-grupę monoidalną )
    - Operacja Monoidalna jest zbiorem zamkniętym
        czyli Przyjmująca wartości tego 
        samego typu i zwracająca ten sam typ
    - Przestępność/Asocjacyjność ( nie ma znaczenia kolejność operacji )
    
To daje nam automatycznie:
    - Atomowość.
    - Paralelizacja.
    - Działa na listach.
    - Operacje można rozszerzać bez dużego kosztu 
        ( można użyć poprzednią sumę i do niej dodać ).

Klient to nie monoid; nie ma elementu, operacji ani przestępności.
Ale możemy wyciągnąć dane monoidalne i je nazwać monoidem.

I tym od razu jest Monad.
Zbiór operacji monoidalnych, które działają na monoidach.
