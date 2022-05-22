Wykłady: 

Link: [Domain Modeling Made Functional - Scott Wlaschin](https://www.youtube.com/watch?v=1pSH8kElmM4)

Link: [Functional Design Patterns - Scott Wlaschin](https://www.youtube.com/watch?v=srQt1NAHYC0)

Link: [The Functional Programmer's Toolkit - Scott Wlaschin](https://www.youtube.com/watch?v=Nrp_LZ-XGsY)

Zasób zawierający większość informacji dotyczące aktualnego stanu świata programowania funkcyjnego w Javascript'cie.

Zasoby:

Link: [awesome-fp-js](https://github.com/stoeffel/awesome-fp-js)

Następna wersja javascript będzie wspierała operator pipeline w stylu 
[hack](https://github.com/tc39/proposal-pipeline-operator).

Przykład:
<pre>
const double = x => x * 2;
const quadruple = double |> double;
const num = quadruple(2);
console.log(num);
>>> 8
</pre>
