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
    const tdSzerzo = document.createElement("td"); //cimsor szerző cella
    tr.appendChild(tdSzerzo); //sorhozfűzés
    tdSzerzo.innerText = ujSor.szerzo //feltöltés az új sor adataibol

    /**
     * @type {HTMLTableCellElement} cimsor mű cella
     */
    const tdMu = document.createElement("td"); //cimsor mű cella
    tr.appendChild(tdMu); //sorhozfűzés
    tdMu.innerText = ujSor.mu //feltöltés az új sor adataibol

    /**
     * @type {HTMLTableCellElement} cimsor fogalmak cella
     */
    const tdFogalmak = document.createElement("td"); // cimsor fogalmak cella
    tr.appendChild(tdFogalmak); //sorhozfűzés 
    tdFogalmak.innerText = ujSor.fogalmak //feltöltés az új sor adataibol
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
    const tdSzerzo = document.createElement("td"); //cimsor szerző cella
    tr.appendChild(tdSzerzo); //sorhozfűzés
    tdSzerzo.innerText = ujSor.szerzo //feltöltés az új sor adataibol

    /**
     * @type {HTMLTableCellElement} cimsor mű cella
     */
    const tdMu = document.createElement("td"); //cimsor mű cella
    tr.appendChild(tdMu); //sorhozfűzés
    tdMu.innerText = ujSor.mu //feltöltés az új sor adataibol

    /**
     * @type {HTMLTableCellElement} cimsor fogalmak cella
     */
    const tdFogalmakEgy = document.createElement("td"); // cimsor fogalmak cella
    tr.appendChild(tdFogalmakEgy); //sorhozfűzés 
    tdFogalmakEgy.innerText = ujSor.fogalmakEgy //feltöltés az új sor adataibol


    /**
     * @type {HTMLTableCellElement} cimsor fogalmak cella
     */
    const tdFogalmakKetto = document.createElement("td"); // cimsor fogalmak cella
    tr.appendChild(tdFogalmakKetto); //sorhozfűzés 
    tdFogalmakKetto.innerText = ujSor.fogalmakKetto //feltöltés az új sor adataibol
})

