/**
 * @type {string[]} A szerzők táblázatának oszlopfejlécei
 */
const cimSor = ["Szerző", "Mű", "Fogalom"] // sorCim változó deklarálása a fejléceknek

/**
 * @type {{szerzo: string, muEgy: string, fogalomEgy: string, muKetto: string, fogalomKetto: string}[]} //Adattömb amiből lesz a táblázat
 */
const adatTomb = [ //Tömb definiálása
    { // objektum definiálása Apollinaire
        szerzo: "Apollinaire", // szerző neve
        muEgy: "A megsebzett galamb és a szökőkút", // első mű
        fogalomEgy: "képvers", // első mű fogalma
        muKetto: "Búcsú", // második mű
        fogalomKetto: "avantgárd" // második mű fogalma
    },
    { // objektum definiálása Thomas Mann
        szerzo: "Thomas Mann", // szerző neve
        muEgy: "Mario és a varázsló", // mű címe
        fogalomEgy: "kisregény" // mű fogalma
    },
    { // objektum definiálása Franz Kafka
        szerzo: "Franz Kafka", // szerző neve
        muEgy: "A per", // első mű
        fogalomEgy: "regény", // első mű fogalma
        muKetto: "Az átváltozás", // második mű
        fogalomKetto: "kisregény" // második mű fogalma
    }
];


/**
 * @type {HTMLTableSectionElement} //a táblázat
 */
const table = document.createElement('table'); //tábla törzsének létrehozása
document.body.appendChild(table); //törzs hgozzáfűzése a body-hoz

/**
 * @type {HTMLTableSectionElement} //a fejléc
 */
const thead = document.createElement('thead'); //thead létrehozás
table.appendChild(thead); //thead body-hoz fűzése

/**
 * @type {HTMLTableRowElement} //fejléc sor
 */
const sorCim = document.createElement('tr'); //cimsor létrhozása
thead.appendChild(sorCim); //cimsor hozzáfűzés a thead-hez


/**
 * cimsor létrehozása
 * @param {string[]} fejlecTomb //a fejlec cellak szovegei
 * @type {HTMLTableRowElement} //head ben levo sor
 * @returns {void}
 */
function fejlecGeneralas(fejlecTomb){ //func definiálás
    for (const cim of fejlecTomb) { // fejléc tömb bejárása
        /**
         * @type {HTMLTableCellElement} //típus megadása
         */
        const th = document.createElement('th'); // fejléc cella létrehozása
        th.innerText = cim; // cella feltöltése
        sorCim.appendChild(th); // cella fejléc sorhoz fűzése
    }
}

fejlecGeneralas(cimSor,sorCim) //függvény meghívás

/**
 * @type {HTMLTableSectionElement} //táblázat body
 */
const tbody = document.createElement('tbody'); //tábla létrhozása
table.appendChild(tbody); //tábla documentumhoz fűzése

/**
 * függvény a táblázat kiirására
 * @param {DataType[]} lista //aaz adatömb amit bejárunk
 * @returns {void} //amivel visszatér a függvény
 * @param {HTMLTableSectionElement} tabla //table amihez fűzünk
 */
function tablaKiiras(lista,tabla){ //func definiálása
    tabla.innerHTML = ''; //tábla ürítése
    for (const cella of lista) { //adattömb bejárása

        /**
         * @type {HTMLTableRowElement} // típus megadása
         */
        const sor = document.createElement('tr'); //első sor létrehozása
        tabla.appendChild(sor); //sor táblához fűzése

        /**
         * @type {HTMLTableCellElement} // típus megadása
         */
        const cellaSzerzo = document.createElement('td'); //szerzo cella létrehozása
        cellaSzerzo.innerText = cella.szerzo; //cella feltöltése adattal
        sor.appendChild(cellaSzerzo); //cella sorhoz fűzése

        /**
         * @type {HTMLTableCellElement} // típus megadása
         */
        const cellaMu1 = document.createElement('td'); //mu cella létrehozása
        cellaMu1.innerText = cella.muEgy; //cella feltöltése adattal
        sor.appendChild(cellaMu1); //cella sorhoz fűzése

        /**
         * @type {HTMLTableCellElement} // típus megadása
         */
        const cellFogalom1 = document.createElement('td'); //fogalom cella létrehozása
        cellFogalom1.innerText = cella.fogalomEgy; //cella feltöltése adattal
        sor.appendChild(cellFogalom1); //cella sorhoz fűzése


        if (cella.muKetto && cella.fogalomKetto) { //elágazás hogy van e cella
            cellaSzerzo.rowSpan = 2; //szerző cella összevonása
 
            /**
             * @type {HTMLTableRowElement} // típus megadása
             */
            const sor2 = document.createElement('tr'); //második sor létrhozása
            tabla.appendChild(sor2); //sor táblához fűzése
 
            /**
             * @type {HTMLTableCellElement} // típus megadása
             */
            const cellaMu2 = document.createElement('td'); //mu cella létrehozása
            cellaMu2.innerText = cella.muKetto; //cella feltöltése adattal
            sor2.appendChild(cellaMu2); //cella sorhoz fűzése

            /**
             * @type {HTMLTableCellElement} // típus megadása
             */
            const cellaFogalom2 = document.createElement('td'); //fogalom cella létrehozása
            cellaFogalom2.innerText = cella.fogalomKetto; //cella feltöltése adattal
            sor2.appendChild(cellaFogalom2); //cella sorhoz fűzése
        }
    }
}

tablaKiiras(adatTomb,tbody); //függvény meghívása



// gomb létrehozása
/**
 * @type {HTMLButtoncellaent} //gomb típusa
 */
const gombEgy = document.createElement('button'); //gomb létrhozása
gombEgy.innerText = 'új sor hozzáadása'; //gomb szöveg megadása
document.body.appendChild(gombEgy); //homb a bodyhpz fűzése


gombEgy.addEventListener('click', function() { //event listener
    console.log('Új sor hozzáad'); //console log

    /** 
     * @type {{szerzo: string, muEgy: string, fogalomEgy: string}} //típusok megadása
     */
    const ujSor = { //uj objektum létrehozása
        szerzo: "Új Szerző", //szerző adat
        muEgy: "Új mű", // mű adat
        fogalomEgy: "Új fogalom" //fogalom adat
    };

    adatTomb.push(ujSor); //hozzáadjuk a tömbhöz
    tablaKiiras(adatTomb, tbody); //ujra kiírjuk a tömböt
});

// gomb2 létrehozása
/**
 * @type {HTMLButtoncellaent} //gomb típusa
 */
const gombKetto = document.createElement('button'); //gomb létrhozása
gombKetto.innerText = 'Dupla sor'; //gomb szöveg megadása
document.body.appendChild(gombKetto); //gomb a bodyhoz fűzése

gombKetto.addEventListener('click', function() { //event listener
    console.log('Új sor hozzáad'); //console log
    /** 
     * @type {{szerzo: string, muEgy: string, fogalomEgy: string, muKetto: string, fogalomKetto: string}} //típusok megadása
     */ 
    const ujDuplaSor = {//uj objektum létrehozása
        szerzo: "Új Szerző", //szerző adat
        muEgy: "Új mű", // mű adat
        fogalomEgy: "Új fogalom", //fogalom adat
        muKetto: 'Új mű 2', //mű adat
        fogalomKetto: 'Új fogalom 2' //fogalom adat
    };
    
    adatTomb.push(ujDuplaSor); //hozzáadjuk a tömbhöz
    tablaKiiras(adatTomb, tbody); //ujra kiírjuk a tömböt
});
