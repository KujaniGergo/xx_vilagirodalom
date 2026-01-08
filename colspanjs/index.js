// commit 9. console col double gomb
/**
 * @type {string[]} a cimSorhoz szukseges tomb
 */
const cimSor = ["Szerző", "Mű", "Fogalmak"]; // a fejlectomb deklaralasa

/**
 * @type {{szerzo: string, mu: string, fogalmakEgy: string, fogalmakKetto?: string}[]} A tablazat torzset tartalmazo adattomb
 */
const adatTomb = [ // tomb deklaralasa
    { // elso sor cellaektumanak deklaralasa
        szerzo: "Appolliniare", //Első sor adatai
        mu: "A megsebzett galamb és a szökőkút", //Első sor adatai
        fogalmakEgy: "képvers", //Első sor adatai
        fogalmakKetto: "emlékezés", //Első sor adatai
    },
    { // masodik sor cellaektumanak deklaralasa
        szerzo: "Apollinaire", //Második sor adatai
        mu: "Búcsú", //Második sor adatai
        fogalmakEgy: "avantgárd",//Második sor adatai
    },
    { // harmadik sor cellaektumanak deklaralasa
        szerzo: "Thomas Mann", //Harmadik sor adatai
        mu: "Mario és a varázsló", //Harmadik sor adatai
        fogalmakEgy: "kisregény", //Harmadik sor adatai
    },
    { // negyedik sor cellaektumanak deklaralasa
        szerzo: "Franz Kafka", //Negyedik sor adatai
        mu: "A per", //Negyedik sor adatai
        fogalmakEgy: "regény", //Negyedik sor adatai
    },
    { // otodik sor cellaektumanak deklaralasa
        szerzo: "Franz Kafka", //Ötödik sor adatai
        mu: "Az átváltozás", //Ötödik sor adatai
        fogalmakEgy: "kisregény", //Ötödik sor adatai
        fogalmakKetto: "groteszk", //Ötödik sor adatai
    }
]

// Táblázat elemeinek létrhozása
/**
 * @type {HTMLTableCellElement} //típus megadása
 */
const table = document.createElement('table'); // Table element létrhozása
/**
 * @type {HTMLHeadElement} //típus megadása
 */
const thead = document.createElement('thead'); // Thead element létrhozása
/**
 * @type {HTMLBodyElement} //típus megadása
 */
const tbody = document.createElement('tbody'); // Tbody element létrhozása

// Elemek összefűzése
table.appendChild(thead); //thead hozzáfűzése a table hez
table.appendChild(tbody); //tbody hozzáfűzése a table hez
document.body.appendChild(table); //tbale hozzáfűzése a body-hoz


/**
 * @type {HTMLTableRowElement} //típus megadása
 */
const fejlecSor = document.createElement('tr'); //Fejléc sor létrhozás
for (const cim of cimSor) { //fejléc tömb bejárása
    thead.appendChild(fejlecSor); //fejlecSor a thead hez fűzése
    /**
     * @type {HTMLTableCellElement} //típus megadása
     */
    const th = document.createElement('th'); //th cella létrhozás
    th.innerText = cim; //cella feltöltése adattal
    fejlecSor.appendChild(th); //cella sorhoz fűzése
}

/**
 * //függvény ami ki rendreli a táblázat bodi-ját
 * @param {dataType[]} adatok //a tömb amit bejárunk a függvényben
 * @returns {void} //visszatérés
 */
function AdatKiIras(adatok) { //adatkiirás func létrehozása
    tbody.innerHTML = ""; //Adat ürítés
    for (const cella of adatok) { //adatTomb bejárás
        /**
         * @type {HTMLTableCellElement} //típus megadása
         */
        const tr = document.createElement('tr'); //tr sor létrhozás

        /**
         * @type {HTMLTableCellElement} //típus megadása
         */
        const tdSzerzo = document.createElement('td'); //szerző cella létrhozás
        tdSzerzo.innerText = cella.szerzo; //szerző cella adatokkal feltöltése
        tr.appendChild(tdSzerzo); //szerző cella sorhoz fűzés

        /**
         * @type {HTMLTableCellElement} //típus megadása
         */
        const tdMu = document.createElement('td'); //mű cella létrhozás
        tdMu.innerText = cella.mu; //mű cella adatokkal feltöltése
        tr.appendChild(tdMu); //mű cella sorhoz fűzés

        /**
         * @type {HTMLTableCellElement} //típus megadása
         */
        const tdFogalomEgy = document.createElement('td');//fogalom szerző cella létrhozás
        tdFogalomEgy.innerText = cella.fogalmakEgy; //fogalom cella adatokkal feltöltése
        tr.appendChild(tdFogalomEgy); //fogalom cella sorhoz fűzés
        
        if (cella.fogalmakKetto === undefined) {//csekoljuk hogy az utolsó cella üres e
            tdFogalomEgy.colSpan = 2; //ha igen akkor az utolsó elöttivel összevonjuk
        } else {  //ha nem
            /**
             * @type {HTMLTableCellElement} //típus megadása
             */
            const tdFogalomKetto = document.createElement('td'); //fogalom szerző cella létrhozás
            tdFogalomKetto.innerText = cella.fogalmakKetto; //fogalom cella adatokkal feltöltése
            tr.appendChild(tdFogalomKetto); //fogalom cella sorhoz fűzés
        }
        tbody.appendChild(tr); //sor a táblához  fűzése
    }
}

AdatKiIras(adatTomb);  //függvény meghívás



//Gomb1
/**
 * @type {HTMLElement} //A htmlGombnak html element típust adunk meg
 */
const htmlGomb = document.createElement("button"); //htmlGomb változó létrehozása
document.body.appendChild(htmlGomb); //htmlGomb hozzáfűzése a dokumentumhoz
htmlGomb.innerText = "Sor hozzáadása 3 cella"; //htmlGomb szöveg


htmlGomb.addEventListener("click", function(){ //Event listener
    /**
     * @type {DataType} //ujSor adattípusa
     */
    const ujSor = { //új sor deklarálása
        szerzo: "ujcellaSzerző", //Változók deklarálása
        mu: "ujcellaMű", //Változók deklarálása
        fogalmakEgy: "ujcellaFogalmak1", //Változók deklarálása
    }
    adatTomb.push(ujSor); //Adatombhöz hozzáadjuk az újsort
    AdatKiIras(adatTomb); //Tábla renderelés az "AdatKiIras"-el
});


//Gomb2
/**
 * @type {HTMLElement} //A htmlGombnak html element típust adunk meg
 */
const htmlGombKetto = document.createElement("button"); //htmlGomb változó létrehozása
document.body.appendChild(htmlGombKetto); //htmlGomb hozzáfűzése a dokumentumhoz
htmlGombKetto.innerText = "Sor hozzáadása 4 cella";//htmlGomb szöveg
/**
 * @type {dataType} //Az új cellaektum adatai amit feltöltünk
 */



htmlGombKetto.addEventListener("click", function(){ //Event listener
    /**
     * @type {DataType} //ujcella adattípusa
     */
    const ujcella = { //új sor deklarálása
        szerzo: "ujcellaSzerző", //Változók deklarálása
        mu: "ujcellaMű", //Változók deklarálása
        fogalmakEgy: "ujcellaFogalmak1", //Változók deklarálása
        fogalmakKetto: "ujcellaFogalmak2" //Változók deklarálása
        }
    
    adatTomb.push(ujcella); //Adatombhöz hozzáadjuk az új cellaektumot
    AdatKiIras(adatTomb); //Tábla renderelés az "AdatKiIras"-el
});