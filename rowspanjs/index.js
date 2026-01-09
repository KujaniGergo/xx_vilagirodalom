/**
 * @type {string[]} A szerzők táblázatának oszlopfejlécei
 */
const cimSor = ["Szerző", "Mű", "Fogalom"] // cimSor változó deklarálása a fejléceknek

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
]

console.log(`${cimSor[0]} | ${cimSor[1]} | ${cimSor[2]} |`) //táblázat fejléc kiírás


/**
 * console logolja a táblázatot
 * @param {DataType[]} lista ezen a tömbön megyünk végig
 * @returns {void} visszatérési érték
 */
function tablaKiiras(lista){ // tablaKiiras függvény
    console.log(`${cimSor[0]} | ${cimSor[1]} | ${cimSor[2]} |`); // fejléc kiírás

    for(const a in lista){ // végigiterálunk a tömbön
        /**
         * @type {string} a sor tartalmának típusa
         */
        let sor = `${lista[a].szerzo}    | ${lista[a].muEgy}    | ${lista[a].fogalomEgy}    |` //sor összeállítása
        if(lista[a].muKetto && lista[a].fogalomKetto){ // vizsgáljuk van e muKetto
            sor += `\n  |_  | ${lista[a].muKetto}    | ${lista[a].fogalomKetto}` //új sor hozzáfűzése
        }
        console.log(sor) //sor kiírása
    }
}


tablaKiiras(adatTomb); //meghívjuk a függvény



// gomb létrehozása
/**
 * @type {HTMLButtonElement} //gomb típusa
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
    tablaKiiras(adatTomb); //ujra kiírjuk a tömböt
});

// gomb2 létrehozása
/**
 * @type {HTMLButtonElement} //gomb típusa
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
    tablaKiiras(adatTomb); //ujra kiírjuk a tömböt
});
