/**
 * @type {HTMLButtonElement} //típus megadása
 */
const szimpla = document.getElementById('szimpla') //gomb element lekérése
szimpla.addEventListener('click', function(){ //event listener szimpla gomb
    console.log("szimpla gomb") //ha le van nyomva ezt logolja

    /**
     * @type {dataType[]} //lista típusa
     */
    const ujSor = { //uj cimsor 
        szerzo: "szerző példa", //szerző
        mu: "mű példa", //mű
        fogalmak: "fogalmak példa1" // fogalmnak
    }

    /**
     * @type {HTMLTableSectionElement} //típus megadás
     */
    const tbody = document.getElementById("tablebody"); //body lekérése

    addujSor(ujSor, tbody); //függvény hívás
});



//dupla gomb event listener
/**
 * @type {HTMLButtonElement} //típus megadása
 */
const dupla = document.getElementById('dupla') //gomb element lekérése
dupla.addEventListener('click', function(){ //event listener dupla gomb
    console.log("dupla gomb") //ha le van nyomva ezt logolja

    /**
     * @type {dataType[]} //lista típusa
     */
    const ujSor = { //uj cimsor 
        szerzo: "szerző példa", //szerző
        mu: "mű példa ", //mű
        fogalmakEgy: "fogalmak1 példa", // fogalmnak
        fogalmakKetto: "fogalmak2 példa" // fogalmnak

    }

    /**
     * @type {HTMLTableSectionElement} //típus megadása
     */
    const tbody = document.getElementById("tablebody"); //body lekérése

    addujSor(ujSor, tbody); //függvény hívás
});


/**
 * uj sort ad hozzáadás
 * @param {DataType} ujSor az új sor adatai
 * @param {HTMLTableSectionElement} tableBody a tbody elem
 * @returns {void}
 */
function addujSor(ujSor, tableBody) { //func definiálás 

    /**
     * @type {HTMLTableRowElement} sor típusa
     */
    const tr = document.createElement("tr"); // sor létrehozása
    tableBody.appendChild(tr); //sor bodyhoz fűzése

    /**
     * @type {HTMLTableCellElement} szező cella típusa 
     */
    const tdSzerzo = document.createElement("td"); //szerző cella létrehozás
    tdSzerzo.innerText = ujSor.szerzo;  //feltöltés adattal
    tr.appendChild(tdSzerzo); //sorhozfűzés

    /**
     * @type {HTMLTableCellElement}  mű cella típusa 
     */
    const tdMu = document.createElement("td"); //cella létrehozás
    tdMu.innerText = ujSor.mu; //feltöltés adattal
    tr.appendChild(tdMu); //sorhozfűzés

    /**
     * @type {HTMLTableCellElement} fogalmak cella típusa 
     */
    const tdFogalomEgy = document.createElement("td"); //cella létrehozás
    tdFogalomEgy.innerText = ujSor.fogalmakEgy; //feltöltés adattal
    tr.appendChild(tdFogalomEgy); //sorhozfűzés

    if (ujSor.fogalmakKetto === undefined) { //elágazás, van e 4. cella
        tdFogalomEgy.colSpan = 2; //sorok összevonása ha nincsen
    }else{ //ha van akkor 4. cella létrehozás
    /**
     * @type {HTMLTableCellElement} fogalmak cella típusa 
     */
    const tdFogalomKetto = document.createElement("td"); //cella létrehozás
    tdFogalomKetto.innerText = ujSor.fogalmakKetto; //feltöltés adattal
    tr.appendChild(tdFogalomKetto); //sorhozfűzés
    }
}
