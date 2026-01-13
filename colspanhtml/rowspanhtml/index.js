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

    ujSorGeneralas(ujSor, tbody); //függvény mehivás
});


/**
 * @type {HTMLButtonElement} //gomb típusa
 */
const dupla = document.getElementById('dupla'); //gomb lekérése
dupla.addEventListener('click', function () { //event listener

    /**
     * @type {DataType} az új sor objektuma
     */
    const ujSor = { //uj sor adatai
        szerzo: "szerző példa", //adadtok
        mu1: "mű példa1", //adadtok
        fogalmak1: "fogalmak példa1", //adadtok
        fogalmak2: "fogalmak példa2", //adadtok
        mu2: "mű példa2" //adadtok
    };

    /**
     * @type {HTMLTableSectionElement} a táblázat törzse
     */
    const tbody = document.getElementById("tablebody"); //body létrehozás

    ujSorGeneralas(ujSor, tbody); //függvény mehivás 
});

/**
 * függvény a sorok kiirására
 * @param {DataType[]} ujSor //a tömb
 * @param {HTMLTableSectionElement} tbody //a tábla body
 * @returns {void}
 */
function ujSorGeneralas(ujSor, tbody){//func definiálás

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
    tdFogalmak.innerText = ujSor.fogalmak;  //feltöltés adattal


    if(ujSor.mu2 && ujSor.fogalmak2){ //elágazás

        tdSzerzo.rowSpan = 2; //szlop összevonása
        /**
         * @type {HTMLTableRowElement} új táblázatsor
         */
        const tr2 = document.createElement("tr"); //sor létrehozás
        tbody.appendChild(tr2); //hozzáfűzés bodyhoz

        /**
         * @type {HTMLTableCellElement} mű cella
         */
        const tdMu2 = document.createElement("td"); //mu cella 
        tr2.appendChild(tdMu2); //hozzáfűzés sorhoz
        tdMu2.innerText = ujSor.mu2; //feltöltés adattal

        /**
         * @type {HTMLTableCellElement} fogalmak cella
         */
        const tdFogalmak2 = document.createElement("td"); //fogalmak cella
        tr2.appendChild(tdFogalmak2); //hozzáfűzés sorhoz
        tdFogalmak2.innerText = ujSor.fogalmak; //feltöltés adattal
    }
}
