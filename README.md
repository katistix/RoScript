# RoScript (RoJS)

RoJS este un experiment, Proof-of-Concept pentru un limbaj identic în sintaxă cu JavaScript dar kayword-urile (de exemplu: if, else, let, for, while etc.) sunt traduse în limba romană.

## Instalare

Poți descărca fișierul `rojs.js` din acest repozitor pentru a-l adăuga la proiectul tău sau poți folosi RoJS direct prin CDN adăugând următorul tag în porțiunea `head`:

    <script src="https://github.com/katistix/RoScript/versions/rojs.js"></script>

 

## Utilizare

Codul RoScript trebuie scris într-un fișier separat, de exemplu `codul-meu.rojs` extensia `.rojs` nu este necesară, dar e recomandat să o folosești deoarece în viitor vor  apărea extensi pentru VSCode (dar și pentru alte editoare de text) care te vor avea syntax highlighting și code snippets.

Un program care calculaează suma a două numere:

    <!-- index.html -->
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Exemplu RoScript</title>
	<script src="rojs.js"></script>
      </head>
      <body>
        <script>
          runRoJS("codul-meu.rojs");
        </script>
      </body>
    </html>
---

    // codul-meu.rojs
    functie suma(a, b){
      returneaza a + b;
    }
    fie rezultat = suma(5, 6);
    scrie(rezultat);
---
Echivalentul codului de mai sus este:
		

    function suma(a, b){
     return a + b;
    }
    let rezultat = suma(5, 6);
    console.log(rezultat);

## Cum funcționează?

Pentru această versiune, principiul de funcționare este relativ simplu. Sunt traduse după un dicționar, cuvintele din codul `.rojs`, astfel se formează un cod JavaScript care urmează să fie executat.

## Dicționarul actual

let = fie
for = pentru
while = cat timp
if = daca
else = altfel
function = functie
return = returneaza
console.log = scrie
console.error = eroare
alert = alerta
// = !comentariu!

# Precizări

- Translatorul verifică doar pentru literele din dicționar. Deci, dacă avem de exemplu `scriem` ca variabilă în codul RoScript, acest cuvănt v-a fi tradus astfel: `console.logm`. Problema asta v-a fi rezolvată în update-uri viitoare.

# Poți susține acest proiect astfel:

<p><a href="https://www.buymeacoffee.com/katistix"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="katistix" /></a></p>
