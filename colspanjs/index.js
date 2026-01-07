//commit 4. console col array bev
//címsor
/**
 * @type {string[]}//Címsor adatainak típusa
 */
const cimSor = ["Szerző", "Mű", "Fogalmak"]; //Címsor adatai

/**
 * @type {szerzo:string,mu:string,fogalmakEgy:string,fogalmakKetto:string} //Adat tomb typusainak megadása
 */
const adatTomb = [ //Adat tomb deklaralasa
    {//Első sor szerző változóinak deklarálása
    szerzo: "Appolliniare", //Elso sor tartalmai
    mu: "A megsebzett galamb és a szökőkút", //Elso sor tartalmai
    fogalmakEgy: "képvers", //Elso sor tartalmai
    fogalmakKetto: "emlékezés",   //Elso sor tartalmai
    },

    {//Második sor szerző változóinak deklarálása
    szerzo: "Apollinaire", //Második sor tartalmai
    mu: "Búcsú", //Második sor tartalmai
    fogalmakEgy: "avantgárd",//Második sor tartalmai
    },

    {//Harmadik sor szerző változóinak deklarálása
    szerzo: "Thomas Mann", //Harmadik sor tartalmai
    mu: "Mario és a varázsló",//Harmadik sor tartalmai
    fogalmakEgy: "kisregény", //Harmadik sor tartalmai
    },

    {//Negyedik sor szerző változóinak deklarálása
    szerzo: "Franz Kafka", //Negyedik sor tartalmai
    mu: "A per", //Negyedik sor tartalmai
    fogalmakEgy: "regény",//Negyedik sor tartalmai
    },

    {//Ötödik sor szerző változóinak deklarálása
    szerzo: "Franz Kafka", //Ötödik sor tartalmai
    mu: "Az átvlátozás", //Ötödik sor tartalmai
    fogalmakEgy: "kisregény", //Ötödik sor tartalmai
    fogalmakKetto: "groteszk", //Ötödik sor tartalmai
    }
]





//kiírás consol-ba
console.log( cimSor[0] +" | "+ cimSor[0] +" | " + cimSor[0] +"| |"); //első sor kiírás
console.log(`${adatTomb[0].szerzo} | ${adatTomb[0].mu} | ${adatTomb[0].fogalmakEgy} | ${adatTomb[0].fogalmakKetto} |`) //második sor kiírás
console.log(`${adatTomb[1].szerzo} | ${adatTomb[1].mu} | ${adatTomb[1].fogalmakEgy} | |`) //első sor kiírás
console.log(`${adatTomb[2].szerzo} | ${adatTomb[2].mu} | ${adatTomb[2].fogalmakEgy} |  |`) //harmadik sor kiírás
console.log(`${adatTomb[3].szerzo} | ${adatTomb[3].mu} | ${adatTomb[3].fogalmakEgy} | |`) //negyedik sor kiírás
console.log(`${adatTomb[4].szerzo} | ${adatTomb[4].mu} | ${adatTomb[4].fogalmakEgy} | ${adatTomb[4].fogalmakKetto} |`) //ötödik sor kiírás
