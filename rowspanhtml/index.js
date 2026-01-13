/**
 * @type {HTMLButtonElement} a szimpla sort hozzáadó gomb
 */
const szimpla = document.getElementById('szimpla'); //gomb lekérése
szimpla.addEventListener('click', function () { //event listener

    /**
     * @type {DataType} az új sor objektuma
     */
    const ujSor = { //uj sor adatai
        szerzo: "szerző példa", //adadtok
        mu: "mű példa", //adadtok
        fogalmak: "fogalmak példa1" //adadtok
    };

    /**
     * @type {HTMLTableSectionElement} a táblázat törzse
     */
    const tbody = document.getElementById("tablebody"); //body létrehozás

    /**
     * @type {HTMLTableRowElement} új táblázatsor
     */
    const tr = document.createElement("tr"); //sor létrehozás
    tbody.appendChild(tr); //hozzáfűzés bodyhoz

    /**
     * @type {HTMLTableCellElement} szerző cella
     */
    const tdSzerzo = document.createElement("td"); //szerzo cella
    tr.appendChild(tdSzerzo); //hozzáfűzés sorhoz
    tdSzerzo.innerText = ujSor.szerzo; //feltöltés adattal

    /**
     * @type {HTMLTableCellElement} mű cella
     */
    const tdMu = document.createElement("td"); //mu cella 
    tr.appendChild(tdMu); //hozzáfűzés sorhoz
    tdMu.innerText = ujSor.mu; //feltöltés adattal

    /**
     * @type {HTMLTableCellElement} fogalmak cella
     */
    const tdFogalmak = document.createElement("td"); //fogalmak cella
    tr.appendChild(tdFogalmak); //hozzáfűzés sorhoz
    tdFogalmak.innerText = ujSor.fogalmak; //feltöltés adattal
});


