/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;
//create the random generators
function makeQuote () {


const name = NAMES[Math.floor(Math.random() * NAMES.length)];
const occupations = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
const rate = PRICE_RANGE.min + Math.floor(Math.random() * PRICE_RANGE.max-PRICE_RANGE.min)

console.log(name, occupations, rate)
}
const frlsList = [...NUM_FREELANCERS]
const name = [...NAMES] 
 name.map(list1);
 function list1(name) {
  console.log (frlsList, name);
 }

 const avRate = rate
 for(let i = 0; i < rate.length; i++){
    avRate += rate[i];
 }
 return rate.length > 0 ? avRate / rate.length : 0;

  







