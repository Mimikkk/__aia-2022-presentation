Zasób zawierający większość informacji dotyczące aktualnego stanu świata programowania funkcyjnego w Javascript'cie.

Link: [awesome-fp-js](https://github.com/stoeffel/awesome-fp-js)

Następna wersja javascript będzie wspierała operator pipeline w stylu 
[hack](https://github.com/tc39/proposal-pipeline-operator).

Przykład:
<pre>
const double = x => x * 2;
const quadruple = double |> double;
const num = quadruple(2);
</pre>
