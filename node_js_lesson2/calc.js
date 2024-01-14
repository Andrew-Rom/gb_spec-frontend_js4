import NP from "number-precision";

export default function calcResultSum(purchases, discount) {
  let total = purchases.reduce((acc, purchase) => NP.plus(acc, purchase), 0);
  total = NP.times(total, discount);
  return total;
}
