// Bài tập 1
let fruitType = [['grapes'], [15]];
console.log(`I have ${fruitType[1]} ${fruitType[0]}`);

// Bài tập 2
for (var i = 0; i < 1; i++) {
  console.log(fruitType[0]);
  console.log(fruitType[1]);
}

for (const fruit in fruitType) {
  console.log(`${fruit}: ${fruitType}[fruit]`);
}



for (const fruits of fruitType) {
  console.log(`${fruits}: ${fruitType}[fruits]`);
  }










// Bài tập 3
var myDog = {
  "name":"husky",
  "legs": 4,
  "color": "brown",
}