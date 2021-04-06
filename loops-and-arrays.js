// ==========================================
// Opdracht 1
// Schrijf een script dat iedere naam in bovenstaande array vervangt door een koosnaampje, door er -"je" achter te plakken.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 namen zou bevatten!
// ==========================================
console.log("------opdracht 1------")

const names = ["Henk", "Piet", "Fred", "Joop"];
console.log(names);

for (let newNames = 0; newNames < names.length; newNames++) {
    names [newNames] = names [newNames] + "je" }

console.log(names);

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(names) geeft: ["Henk", "Piet", "Fred", "Joop"]
// Na jouw script zie je de aangepaste waardes:
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]


// ==========================================
// Opdracht 2
// Schrijf een script dat ieder getal in bovenstaande array met 3 vermenigvuldigd.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================
console.log("------opdracht 2------")

const numbers = [2, 4, 5, 29, 38];
console.log(numbers);

for (let newNumbers = 0; newNumbers < numbers.length; newNumbers++) {
    numbers [newNumbers] = numbers [newNumbers] * 3 }

console.log(numbers);

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [2, 4, 5, 29, 38];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [ 6, 12, 15, 87, 114 ];


// ==========================================
// Opdracht 3
// Schrijf een script dat voor de maat van ieder vierkant in onderstaande array het volume uitrekent.
// Het volume is lengte x breedte x hoogte
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================
console.log("------opdracht 3------")

const squares = [30, 2, 8, 24, 11];
console.log(squares);

for (let volume = 0; volume < squares.length; volume++) {
    squares [volume] = squares [volume] * squares [volume] * squares [volume] }

console.log(squares);

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [30, 2, 8, 24, 11];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [27000, 8, 512, 13824, 1331];
