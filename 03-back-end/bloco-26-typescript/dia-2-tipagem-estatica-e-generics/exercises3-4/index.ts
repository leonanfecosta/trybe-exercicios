import PizzaSugar from "./PizzaSugar";
import PizzaVegetarian from "./PizzaVegetarian";
import PizzaCommon from "./PizzaCommon";

// const calabresa: Pizza = {
//   flavor: "Calabresa",
//   slices: 8,
// };

// const marguerita: Pizza = {
//   flavor: "Marguerita",
//   slices: 6,
// };

// const nutela: Pizza = {
//   flavor: "Nutela",
//   slices: 4,
// };

const calabresa: PizzaCommon = {
  flavor: "Calabresa",
  slices: 8,
};

const marguerita: PizzaVegetarian = {
  flavor: "Marguerita",
  slices: 6,
};

const nutela: PizzaSugar = {
  flavor: "Nutela",
  slices: 4,
};

console.log(calabresa);
console.log(marguerita);
console.log(nutela);