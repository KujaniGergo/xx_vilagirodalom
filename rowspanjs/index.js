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


// tablázat kiírása ciklussal
for (const a in adatTomb) { //végigiterálunk az adattombön
    /**
     * @type {string} //típusa jelenlegi sornak
     */
    let sor = `${adatTomb[a].szerzo}    | ${adatTomb[a].muEgy}    | ${adatTomb[a].fogalomEgy}    |` //sorok összefűzése
    if (adatTomb[a].muKetto && adatTomb[a].fogalomKetto) { //vizsgáljuk van e második mű cella
        sor += `\n  |_  | ${adatTomb[a].muKetto}    | ${adatTomb[a].fogalomKetto}` //második sor hozzáfűzése
    }
    console.log(sor) //sor kiírása
}