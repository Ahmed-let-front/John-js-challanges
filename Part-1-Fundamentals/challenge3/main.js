const scoreDolphins = +((96 + 108 + 89) / 3).toFixed(1);
const scoreKoalas = +((88 + 91 + 110) / 3).toFixed(1);
if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy");
}
