const pilots = [
  "Hamilton",
  "Vettel",
  "Russel",
  "Schumacher",
  "McQueen",
  "Verstappen",
];

const getRandomTime = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const drive = (pilot) => {
  return new Promise((resolve) => {
    const time = getRandomTime(2000, 4000);

    setTimeout(() => {
      resolve({ pilot, time });
    }, time);
  });
};

// console.log(drive(pilots[0]));

console.log("Заїзд почався ставки не приймаються!!!");

const promises = pilots.map((pilot) => drive(pilot));

// console.log(promises);

Promise.all(promises)
  .then((results) => {
    console.table(results);
  })
  .catch((error) => console.log(error))
  .finally(console.log("Заїзд закінчився ставки знову приймаються"));

Promise.race(promises).then((winner) => console.log(winner));
