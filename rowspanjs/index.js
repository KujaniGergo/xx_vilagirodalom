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
 * @type {string} Apollinaire
 */
let apollinaireSor = `${adatTomb[0].szerzo} | ${adatTomb[0].muEgy} | ${adatTomb[0].fogalomEgy} |` // első sor összeállítása
if (adatTomb[0].muKetto && adatTomb[0].fogalomKetto) { //második mű vizsgálása
    apollinaireSor += `\n |_ | ${adatTomb[0].muKetto} | ${adatTomb[0].fogalomKetto} |` // új sor hozzáfűzése
}
console.log(apollinaireSor) // sor kiírása


/**
 * @type {string} Thomas Mann
 */
let thomasMannSor = `${adatTomb[1].szerzo} | ${adatTomb[1].muEgy} | ${adatTomb[1].fogalomEgy} |` // sor összeállítása
if (adatTomb[1].muKetto && adatTomb[1].fogalomKetto) { //második mű vizsgálása
    thomasMannSor += `\n |_ | ${adatTomb[1].muKetto} | ${adatTomb[1].fogalomKetto} |` // új sor hozzáfűzése
}
console.log(thomasMannSor) // sor kiírása


/**
 * @type {string} Franz Kafka
 */
let kafkaSor = `${adatTomb[2].szerzo} | ${adatTomb[2].muEgy} | ${adatTomb[2].fogalomEgy} |` // első sor összeállítása
if (adatTomb[2].muKetto && adatTomb[2].fogalomKetto) { //második mű vizsgálása
    kafkaSor += `\n |_ | ${adatTomb[2].muKetto} | ${adatTomb[2].fogalomKetto} |` // új sor hozzáfűzése
}
console.log(kafkaSor) // sor kiírása