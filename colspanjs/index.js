//commit 6. console col ciklus
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


console.log(cimSor[0] +" | "+ cimSor[1] +" | " + cimSor[2] +" |"); //Címsor kiíréas

for(const obj of adatTomb){  //For cikuls a tömb bejárására
    /**
     * @type {string} Típus megadása
     */
    let Sor = `${obj.szerzo} | ${obj.mu} |`; //Feltöltés értékekkel
    if(obj.fogalmakKetto != undefined) //vizsgaljuk, hogy az "FogalmakKetto" undefine-e
    { 
        Sor += `${obj.fogalmakEgy} | ${obj.fogalmakKetto} |`; //Ha igen akkor cellák összefűzése
    }else //elágazás
    { 
        Sor += `${obj.fogalmakEgy} |`; //Cella hozzáfűzése
    }
    console.log(Sor) //Kiírás
}