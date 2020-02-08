//Josephus problem 
function josephus(soldiersNumber) {
  let soldiers = [];
  for (let i = 1; i < (soldiersNumber + 1); i++) {
    soldiers.push(i);
  }
  do {
    for (let i = 0; i < soldiers.length; i++) {
      let soldierToKill = i + 1;
      if (soldierToKill === soldiers.length) {
        soldierToKill = 0;
      }
      console.log(`Soldier ${soldiers[i]} killed ${soldiers[soldierToKill]}`);
      soldiers.splice(soldierToKill, 1);
    }
  } while (soldiers.length > 1);
  console.log(`Soldier ${soldiers} survived!`)
}

josephus(6)