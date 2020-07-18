const pCherry = 15.678;
const pCandy = 123.965;
const pNuts = 90.2345;

console.log(
  `price of cherries:`,
  pCherry,
  `,`,
  `price of candies:`,
  pCandy,
  `,`,
  `price of nuts:`,
  pNuts
);

console.log(`Max number`, Math.max(pCherry, pCandy, pNuts));

console.log(`Min number`, Math.min(pCherry, pCandy, pNuts));

console.log(`Summery of all products`, (pSum = pCherry + pCandy + pNuts));

console.log(
  `Summery without coins,round to less`,
  (pSumMin = Math.floor(pCherry) + Math.floor(pCandy) + Math.floor(pNuts))
);

console.log(
  `Summery round to hundreds`,
  (pSumRound = Math.round(pSum / 100) * 100)
);

// if (pSumMin % 2 === 0) {
//   console.log(`Parne chyslo`);
// } else {
//   console.log("Neparne chyslo");
// }

const isEven = pSumMin % 2 === 0;
console.log(isEven);

console.log(`Change from 500grn if to buy all goods`, (change = 500 - pSum));

console.log(
  `Middle price,round to the second sign after coma`,
  (middlePrice = Math.round((pSum / 2) * 100)) / 100
);

let sale = Math.trunc(Math.random() * 100);
console.log(`sale`, sale);

let forPay = Math.round((pCherry - (pCherry / 100) * sale) * 100) / 100;
console.log(`price with sale`, forPay);
console.log(
  `clearCash`,
  Math.trunc(pCherry / 2) - Math.trunc((pCherry / 100) * sale)
);
