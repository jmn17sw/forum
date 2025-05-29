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
const state = [];

function makeQuote () {


const name = NAMES[Math.floor(Math.random() * NAMES.length)];
const occupations = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
const rate = PRICE_RANGE.min + Math.floor(Math.random() * PRICE_RANGE.max-PRICE_RANGE.min)

return{
  name: name,
  occupation: occupations,
  rate: rate
};
}
makeQuote()


for (let counter = 1; counter <= 100; counter++){
 const newList = makeQuote();
state.push(newList);
}


const makeAverage = () => {

  const totalRate = state.reduce((total, freelancer) => {
    return total +  freelancer.rate;
  }, 0)

return totalRate / state.length

//  const avRate = rate
//  for(let i = 0; i < rate.length; i++){
//     avRate += rate[i];
//  }
//  return rate.length > 0 ? avRate / rate.length : 0;
}

  







