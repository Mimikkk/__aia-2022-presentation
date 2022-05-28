import { Client } from "../../models/Client";
import "./ClientSummary.scss";

// TODO - replace with a monoidal type and sum rows using fp methodology
// Należy zaimplementować monoid, który będzie spełniał kontrakt monodialny.
// - Element naturalny ( a op n = a ) - w tym wypadku przejdzie wersja implicit ( wartość || domyślna )
// - Przestępny ( a op b == b op a )
// - Monad ( pozostaje tym samym elementem )
// Należy zaimplementować funkcję groupBy, która będzie grupowała wiersze na podstawie typu klienta. ( mapa ; redukcja )
// Należy zaimplementować funkcję aggregate, która będzie sumowała wszystkie wiersze zawierające dane klienta. ( agregacja ; redukcja )
// Należy zaimplementować funkcję entitle, która będzie dodawała nagłówek do wiersza. ( opuszczanie, bind ; funktor )
// Należy zaimplementować funkcję from, która będzie tworzyła wiersz z danymi klienta. ( podnoszenie, bind ; funktor )

// Należy zaimplementować funkcję createRows,
//   która będzie tworzyła wszystkie wiersze z danymi klientów względem wymogu biznesowego.
//   W tym zadaniu pomijam fakt, że można by to zrobić za pomocą podwierszy wiersza.
// - Zwykły
// - Suma zwykłych
// - Student
// - Suma studentów
// - Suma zwykłych + studentów
// - Pracownik
// - Suma pracowników
// - Suma zwykłych + pracowników
// - Suma studentów + pracowników
// - Suma zwykłych + studentów + pracowników

export const createRows = (clients: Client[]) => {
  return clients;
};
