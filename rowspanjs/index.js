/**
 * @type {string} A szerző oszlopfejléce
 */
const fejlecSzerzo = "Szerző" // változó deklarálása
/**
 * @type {string} A mű oszlopfejléce
 */
const fejlecMu = "Mű" // változó deklarálása
/**
 * @type {string} A fogalom oszlopfejléce
 */
const fejlecFogalom = "Fogalom" // változó deklarálása


/**
 * @type {{szerzo: string, mu: string, fogalmakEgy: string, muKetto: string, fogalmakKetto: string}} Apollinairehez tartozó adatok
 */
const szerzoApollinaire = { // objektum definiáls
    szerzo: "Apollinaire", // szerző neve
    mu: "A megsebzett galamb és a szökőkút", // első mű
    fogalmakEgy: "képvers", // első mű fogalma
    muKetto: "Búcsú", // második mű
    fogalmakKetto: "avantgárd" // második mű fogalma
}

/**
 * @type {{szerzo: string, mu: string, fogalmakEgy: string}} Mannhez tartozó adatok
 */
const szerzoThomasMann = { // objektum definiáls
    szerzo: "Thomas Mann", // szerző neve
    mu: "Mario és a varázsló", // mű
    fogalmakEgy: "kisregény" // mű fogalma
}

/**
 * @type {{szerzo: string, mu: string, fogalmakEgy: string, muKetto: string, fogalmakKetto: string}} Kafkahoz tartozó adatok
 */
const szerzoKafka = { // objektum definiálás
    szerzo: "Franz Kafka", // szerző neve
    mu: "A per", // első mű
    fogalmakEgy: "regény", // első mű fogalma
    muKetto: "Az átváltozás", // második mű
    fogalmakKetto: "kisregény" // második mű fogalma
}


// Táblázat kiírása a konzolba
console.log(`${fejlecSzerzo} | ${fejlecMu} | ${fejlecFogalom} |`) // Fejléc kiírása
console.log(`${szerzoApollinaire.szerzo} | ${szerzoApollinaire.mu} | ${szerzoApollinaire.fogalmakEgy} |`) // 1. sor
console.log(` |_ | ${szerzoApollinaire.muKetto} | ${szerzoApollinaire.fogalmakKetto} |`) // 2. sor
console.log(`${szerzoThomasMann.szerzo} | ${szerzoThomasMann.mu} | ${szerzoThomasMann.fogalmakEgy} |`) // 3. sor
console.log(`${szerzoKafka.szerzo} | ${szerzoKafka.mu} | ${szerzoKafka.fogalmakEgy} |`) // 4. sor
console.log(` |_ | ${szerzoKafka.muKetto} | ${szerzoKafka.fogalmakKetto} |`) // 5. sor
