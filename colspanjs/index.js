// commit 5.  console col elagazas
/**
 * @type {string[]} a cimSorhoz szukseges tomb
 */
const cimSor = ["Szerző", "Mű", "Fogalmak"]; // a fejlectomb deklaralasa

/**
 * @type {{szerzo: string, mu: string, fogalmakEgy: string, fogalmakKetto?: string}[]} A tablazat torzset tartalmazo adattomb
 */
const adatTomb = [ // tomb deklaralasa
    { // elso sor objektumanak deklaralasa
        szerzo: "Appolliniare", //Első sor adatai
        mu: "A megsebzett galamb és a szökőkút", //Első sor adatai
        fogalmakEgy: "képvers", //Első sor adatai
        fogalmakKetto: "emlékezés", //Első sor adatai
    },
    { // masodik sor objektumanak deklaralasa
        szerzo: "Apollinaire", //Második sor adatai
        mu: "Búcsú", //Második sor adatai
        fogalmakEgy: "avantgárd",//Második sor adatai
    },
    { // harmadik sor objektumanak deklaralasa
        szerzo: "Thomas Mann", //Harmadik sor adatai
        mu: "Mario és a varázsló", //Harmadik sor adatai
        fogalmakEgy: "kisregény", //Harmadik sor adatai
    },
    { // negyedik sor objektumanak deklaralasa
        szerzo: "Franz Kafka", //Negyedik sor adatai
        mu: "A per", //Negyedik sor adatai
        fogalmakEgy: "regény", //Negyedik sor adatai
    },
    { // otodik sor objektumanak deklaralasa
        szerzo: "Franz Kafka", //Ötödik sor adatai
        mu: "Az átváltozás", //Ötödik sor adatai
        fogalmakEgy: "kisregény", //Ötödik sor adatai
        fogalmakKetto: "groteszk", //Ötödik sor adatai
    }
]

// A string konkatenaciora olyan szintaxist hasznalsz amilyet akarsz
console.log(cimSor[0] + " | " + cimSor[1] + " | " + cimSor[2] + " |"); // Kiirom konzolra a tablazat fejlecet

/**
 * @type {string} Elso soranak osszeallitott tartalma
 */
let elsoSor = `${adatTomb[0].szerzo} | ${adatTomb[0].mu} | `; //Feltöltjük elemekkel
if(adatTomb[0].fogalmakKetto != undefined){ //Megnézzük hogy van e "fogalomKetto"
    elsoSor += `${adatTomb[0].fogalmakEgy} | ${adatTomb[0].fogalmakKetto} |`; //Ha nincsen akkor cellák összevonása
} else { //Elágazás
    elsoSor += `${adatTomb[0].fogalmakEgy} |`; //Cella hozzáfűzésa
}
console.log(elsoSor); //Kiírás




/**
 * @type {string} Második soranak osszeallitott tartal  ma
 */
let masodikSor = `${adatTomb[1].szerzo} | ${adatTomb[1].mu} | `; //Feltöltjük elemekkel
if(adatTomb[1].fogalmakKetto != undefined){ //Megnézzük hogy van e "fogalomKetto"
    masodikSor += `${adatTomb[1].fogalmakEgy} | ${adatTomb[1].fogalmakKetto} |`; //Ha nincsen akkor cellák összevonása
} else { //Elágazás
    masodikSor += `${adatTomb[1].fogalmakEgy} |`; //Cella hozzáfűzésa
}
console.log(masodikSor); //Kiírás




/**
 * @type {string} Harmadik soranak osszeallitott tartalma
 */
let harmadikSor = `${adatTomb[2].szerzo} | ${adatTomb[2].mu} | `; //Feltöltjük elemekkel
if(adatTomb[2].fogalmakKetto != undefined){ //Megnézzük hogy van e "fogalomKetto"
    harmadikSor += `${adatTomb[2].fogalmakEgy} | ${adatTomb[2].fogalmakKetto} |`; //Ha nincsen akkor cellák összevonása
} else { //Elágazás
    harmadikSor += `${adatTomb[2].fogalmakEgy} |`; //Cella hozzáfűzésa
}
console.log(harmadikSor); //Kiírás




/**
 * @type {string} Negyedik soranak osszeallitott tartalma
 */
let negyedikSor = `${adatTomb[3].szerzo} | ${adatTomb[3].mu} | `; //Feltöltjük elemekkel
if(adatTomb[3].fogalmakKetto != undefined){ //Megnézzük hogy van e "fogalomKetto"
    negyedikSor += `${adatTomb[3].fogalmakEgy} | ${adatTomb[3].fogalmakKetto} |`; //Ha nincsen akkor cellák összevonása
} else { //Elágazás
    negyedikSor += `${adatTomb[3].fogalmakEgy} |`; //Cella hozzáfűzésa
}
console.log(negyedikSor); //Kiírás




/**
 * @type {string} Ötödik soranak osszeallitott tartalma
 */
let otodikSor = `${adatTomb[4].szerzo} | ${adatTomb[4].mu} | `; //Feltöltjük elemekkel
if(adatTomb[4].fogalmakKetto != undefined){ //Megnézzük hogy van e "fogalomKetto"
    otodikSor += `${adatTomb[4].fogalmakEgy} | ${adatTomb[4].fogalmakKetto} |`; //Ha nincsen akkor cellák összevonása
} else {//Elágazás 
    otodikSor += `${adatTomb[4].fogalmakEgy} |`; //Cella hozzáfűzésa
}
console.log(otodikSor); //Kiírás
