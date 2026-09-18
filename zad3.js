//Wprowadzana wartość
let input = prompt("Wprowadz liczbe: ");
let liczba = Number(input);
//Petla, ktora sprawdza czy podano poprawną liczbe
while (isNaN(liczba) || !Number.isInteger(liczba)) {
    input = prompt("To nie jest poprawna liczba całkowita. Spróbuj ponownie:");
    liczba = Number(input);
}
//Wykonanie obliczen
let wprowadzona = liczba;
let przeciwna = liczba;
let plus15 = liczba + 15;
let plus05 = liczba + 0.5;
let kwadrat = Math.pow(liczba, 2);
let dzielenie2 = liczba / 2;
let reszta2 = liczba % 2;
let wieksza1 = liczba + 1;
let mniejsza1 = liczba - 1;
let podzial3 = liczba / 3;
let floor3 = Math.floor(podzial3);
let ceil3 = Math.ceil(podzial3);
let round3 = Math.round(podzial3);
let pierwiastek = liczba >= 0 ? Math.sqrt(liczba) : "Brak (liczba ujemna)";
let liczbalosowa = Math.round() * 50;
let iloczynlosowy = liczba * liczbalosowa;
let absolutna = Math.abs(liczba);
//Wyswietlanie wynikow
document.write("Wynik Obliczeń" + '<br>')
document.write("1.Wprowadzona liczba: " + wprowadzona + '<br>')
document.write("2.Liczba o znaku przeciwnym: " + przeciwna + '<br>')
document.write("3.liczba powiekszona o 15: " + plus15 + '<br>')
document.write("4.liczba powiekszona o 0.5: " + plus05+ '<br>')
document.write("5.kwadrat wprowadzonej liczby: " + kwadrat + '<br>')
document.write("6.Wartosc dzielenia przez 2: " + dzielenie2 + '<br>')
document.write("7.reszta z dzielenia przez 2: " + reszta2 + '<br>')
document.write("8.liczba o 1 wieksza: " + wieksza1 + '<br>')
document.write("9.liczba o 1 mniejsza: " + mniejsza1 + '<br>')
document.write("10.Zaokrąglona w dół: " + floor3 + '<br>')
document.write("11.Zaokrąglona w gore: " + ceil3 + '<br>')
document.write("12.Zaokrąglona do najblizszej calkowitej: " + round3 + '<br>')
document.write("13.pierwiastek z wprowadzonej liczby: " + pierwiastek + '<br>')
document.write("14. Wynik iloczynu z liczbą losową (0-50): " + iloczynLosowy + " (wylosowano: " + liczbaLosowa.toFixed(2) + ")" + '<br>');
document.write("15.wartosc absolutna: " + absolutna + '<br>')