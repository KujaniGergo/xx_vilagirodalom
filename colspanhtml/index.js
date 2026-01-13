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
        szerzo: "Szerző", //szerző
        mu: "Mű", //mű
        fogalmak: "Fogalmak" // fogalmnak
    }

    /**
     * @type {HTMLBodyElement} lekért body típusa
     */
    const tbody = document.getElementById("tablebody"); //body lekérése

    /**
     * @type {HTMLTableRowElement} sor típusa
     */
    const tr = document.createElement("tr"); // sor létrehozása
    tbody.appendChild(tr); //sor bodyhoz fűzése

    /**
     * @type {HTMLTableCellElement} cimsor szező cella
     */
    const thSzerzo = document.createElement("th"); //cimsor szerző cella
    tr.appendChild(thSzerzo); //sorhozfűzés
    thSzerzo.innerText = ujSor.szerzo //feltöltés az új sor adataibol

    /**
     * @type {HTMLTableCellElement} cimsor mű cella
     */
    const thMu = document.createElement("th"); //cimsor mű cella
    tr.appendChild(thMu); //sorhozfűzés
    thMu.innerText = ujSor.mu //feltöltés az új sor adataibol

    /**
     * @type {HTMLTableCellElement} cimsor fogalmak cella
     */
    const thFogalmak = document.createElement("th"); // cimsor fogalmak cella
    tr.appendChild(thFogalmak); //sorhozfűzés 
    thFogalmak.innerText = ujSor.fogalmak //feltöltés az új sor adataibol
})
















//dupla gomb event listener
/**
 * @type {HTMLButtonElement} //típus megadása
 */
const dupla = document.getElementById('dupla') //gomb element lekérése
dupla.addEventListener('click', function(){ //event listener dupla gomb
    console.log("dupla gomb") //ha le van nyomva ezt logolja
})
