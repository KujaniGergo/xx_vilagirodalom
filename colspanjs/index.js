/**
 * @type {{szoveg: string}[]} //string típus az array elemeinek
 */
const cimSor = [ //cimsor array
    { szoveg: "Szerző" }, //Szerző
    { szoveg: "Mű" }, //Mű
    { szoveg: "Fogalmak" } //Fogalmak
];



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
 * @type {HTMLTableRowElement} //fejléc típusmegadása
 */
const fejlecSor = document.createElement('tr'); //fejléc sor létrhozás
thead.appendChild(fejlecSor); //sor hozzáfűzése

/**
 * Fejléc kiírása
 * @param {{szoveg: string}[]} cimArr //A tömb amiben a cim szövegei vannak
 * @param {HTMLTableRowElement} parent //amihez fűzzük a cellát
 * @returns {void} //visszatérési érték
 */
function fejlecKiiras(cimArr, parent) { //függvény definiálás
    for (let i = 0; i < cimArr.length; i++) { //tömb bejárása
        /**
         * @type {HTMLTableCellElement} //cella typus megadása
         */
        const th = document.createElement("th"); //cella létrehozás
        th.innerText = cimArr[i].szoveg; //cella feltöltése szöveggel
        if(cimArr[i].colspan == 2); //ha nincsen 4. cella összevonás
        parent.appendChild(th); //cella hozzáfűzése a fejlécorhoz
    }
}
fejlecKiiras(cimSor, fejlecSor); //függvény meghívás

/**
 * Függvény ami kirendereli a táblázat body-ját
 * @param {{dataType}[]} adatok //A tömb amiben a cim szövegei vannak
 * @param {HTMLTableSectionElement} tbodyElem //amihez fűzzük a cellát
 * @returns {void} //visszatérési érték
 */
function AdatKiIras(adatok, tbodyElem) {//függvény definiálás
    tbodyElem.innerHTML = ""; //body ürítése

    for (const cella of adatok) { //tömb bejárása
        /**
         * @type {HTMLTableRowElement} //cella típusmegadása
         */
        const tr = document.createElement('tr'); //sor létrehozás

        /**
         * @type {HTMLTableCellElement} //cella típusmegadása
         */
        const tdSzerzo = document.createElement('td'); //cella létrehozás
        tdSzerzo.innerText = cella.szerzo; //cella feltöltése szöveggel
        tr.appendChild(tdSzerzo); //sorhoz fűzés

        /**
         * @type {HTMLTableCellElement} //cella típusmegadása
         */
        const tdMu = document.createElement('td'); //cella létrehozás
        tdMu.innerText = cella.mu; //cella feltöltése szöveggel
        tr.appendChild(tdMu); //sorhoz fűzés

        /**
         * @type {HTMLTableCellElement} //cella típusmegadása
         */
        const tdFogalomEgy = document.createElement('td'); //cella létrehozás
        tdFogalomEgy.innerText = cella.fogalmakEgy; //cella feltöltése szöveggel
        tr.appendChild(tdFogalomEgy); //sorhoz fűzés

        if (cella.fogalmakKetto == undefined) { //feltétel
            tdFogalomEgy.colSpan = 2; //cellák összevonása ha nincsen 4.
        } else { //elágazás ha ez első feltétel nem tlejesül, fetöltés 4. cella dataival
            /**
            * @type {HTMLTableCellElement} //cella típusmegadása
            */
            const tdFogalomKetto = document.createElement('td'); //cella létrehozás
            tdFogalomKetto.innerText = cella.fogalmakKetto; //cella feltöltése szöveggel
            tr.appendChild(tdFogalomKetto);  //sorhoz fűzés
        }

        tbodyElem.appendChild(tr); //sor füzése a táblához
    }
}

AdatKiIras(adatTomb, tbody); //függvény meghívás



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
    AdatKiIras(adatTomb, tbody); //Tábla renderelés az "AdatKiIras"-el
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
    AdatKiIras(adatTomb, tbody); //Tábla renderelés az "AdatKiIras"-el
});
