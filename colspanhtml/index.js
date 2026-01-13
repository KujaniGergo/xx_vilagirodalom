/**
 * @type {HTMLButtonElement} //típus megadása
 */
const szimpla = document.getElementById('szimpla') //gomb element lekérése
szimpla.addEventListener('click', function(){ //event listener szimpla gomb
    console.log("szimpla gomb") //ha le van nyomva ezt logolja
})


/**
 * @type {HTMLButtonElement} //típus megadása
 */
const dupla = document.getElementById('dupla') //gomb element lekérése
dupla.addEventListener('click', function(){ //event listener dupla gomb
    console.log("dupla gomb") //ha le van nyomva ezt logolja
})