//richiesta button
let button = document.getElementById('calculate');




button.addEventListener('click', function(){
    let km = document.getElementById('km').value;
    console.log(km)
    //dichiarazione età
    let age = document.getElementById('age').value;
    console.log(age)
    let maggiorenne = document.getElementById('maggiorenne')
    let minorenne = document.getElementById('minorenne')
    let over = document.getElementById('over')

    //dichiarazione prezzo
    let prezzo = 0.21;
    console.log(prezzo);

    let risultato = km * prezzo

    if(age === maggiorenne) {
        risultato = km * prezzo
    }

    else if (age === minorenne) {
        risultato = risultato -(km * prezzo / 100 * 20)
    } 

    else if (age === over) {
        risultato = risultato -(km * prezzo / 100 * 40)
    }
    console.log (risultato)
})

//risultato a video
document.getElementById('risultato').innerHTML = `${risultato} €`

//variazione costo biglietto se minore di 18 o maggiore di 65 anni


//risultato a due decimali
//risultato = risultato.toFixed(2)
//console.log (risultato)

