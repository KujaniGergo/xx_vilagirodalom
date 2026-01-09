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


console.log(`${cimSor[0]} | ${cimSor[1]} | ${cimSor[2]} |`) // Kiírom konzolra a táblázat fejlécét
console.log(`${adatTomb[0].szerzo} | ${adatTomb[0].muEgy} | ${adatTomb[0].fogalomEgy} |`) //1. sor
console.log(` |_ | ${adatTomb[0].muKetto} | ${adatTomb[0].fogalomKetto} |`) //2. sorát
console.log(`${adatTomb[1].szerzo} | ${adatTomb[1].muEgy} | ${adatTomb[1].fogalomEgy} |`) //3. sor
console.log(`${adatTomb[2].szerzo} | ${adatTomb[2].muEgy} | ${adatTomb[2].fogalomEgy} |`) //4. sor
console.log(` |_ | ${adatTomb[2].muKetto} | ${adatTomb[2].fogalomKetto} |`) //1. sor
 