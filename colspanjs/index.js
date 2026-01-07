//commit 3. console col object bev
//címsor
/**
 * @type {string} //Szerző typusa
 */
const cimSorSzerzo = "Szerző" //Szerző deklarálása
/**
 * @type {string} //Mű típusa
 */
const cimSorMu = "Mű" //Mű deklarálása
/**
 * @type {string} //Ágazat típusa
 */
const cimSorAgazat = "Ágazat" //Ágazat Deklarálása

/**
 * @type {{szerzo:string,mu:string,fogalmakEgy:string,fogalmakKetto:string}} Változók típusainak megadása
 */
const elsoSor = {//Első sor szerző változóinak deklarálása
    szerzo: "Appolliniare", //Elso sor tartalmai
    mu: "A megsebzett galamb és a szökőkút", //Elso sor tartalmai
    fogalmakEgy: "képvers", //Elso sor tartalmai
    fogalmakKetto: "emlékezés",   //Elso sor tartalmai
    }


/**
 * @type {{szerzo:string,mu:string,fogalmakEgy:string,fogalmakKetto:string}} Változók típusainak megadása
 */
const masodikSor = {//Második sor szerző változóinak deklarálása
    szerzo: "Apollinaire", //Második sor tartalmai
    mu: "Búcsú", //Második sor tartalmai
    fogalmakEgy: "avantgárd",//Második sor tartalmai
    }


/**
 * @type {{szerzo:string,mu:string,fogalmakEgy:string,fogalmakKetto:string}} Változók típusainak megadása
 */
const harmadikSor = {//Harmadik sor szerző változóinak deklarálása
    szerzo: "Thomas Mann", //Harmadik sor tartalmai
    mu: "Mario és a varázsló",//Harmadik sor tartalmai
    fogalmakEgy: "kisregény", //Harmadik sor tartalmai
    }


/**
 * @type {{szerzo:string,mu:string,fogalmakEgy:string,fogalmakKetto:string}} Változók típusainak megadása
 */
const negyedikSor = {//Negyedik sor szerző változóinak deklarálása
    szerzo: "Franz Kafka", //Negyedik sor tartalmai
    mu: "A per", //Negyedik sor tartalmai
    fogalmakEgy: "regény",//Negyedik sor tartalmai
    }


/**
 * @type {{szerzo:string,mu:string,fogalmakEgy:string,fogalmakKetto:string}} Változók típusainak megadása
 */
const ototdikSor ={//Ötödik sor szerző változóinak deklarálása
    szerzo: "Franz Kafka", //Ötödik sor tartalmai
    mu: "Az átvlátozás", //Ötödik sor tartalmai
    fogalmakEgy: "kisregény", //Ötödik sor tartalmai
    fogalmakKetto: "groteszk", //Ötödik sor tartalmai
    }






//kiírás consol-ba
console.log( cimSorSzerzo +" | "+ cimSorMu +" | " + cimSorAgazat +"| |"); //első sor kiírás
console.log(`${elsoSor.szerzo} | ${elsoSor.mu} | ${elsoSor.fogalmakEgy} | ${elsoSor.fogalmakKetto} |`) //második sor kiírás
console.log(`${masodikSor.szerzo} | ${masodikSor.mu} | ${masodikSor.fogalmakEgy} | |`) //első sor kiírás
console.log(`${harmadikSor.szerzo} | ${harmadikSor.mu} | ${harmadikSor.fogalmakEgy} |  |`) //harmadik sor kiírás
console.log(`${negyedikSor.szerzo} | ${negyedikSor.mu} | ${negyedikSor.fogalmakEgy} | |`) //negyedik sor kiírás
console.log(`${ototdikSor.szerzo} | ${ototdikSor.mu} | ${ototdikSor.fogalmakEgy} | ${ototdikSor.fogalmakKetto} |`) //ötödik sor kiírás
