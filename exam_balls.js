const balls = [
    {id: 0,
    weight: 1},
    {id: 1,
    weight: 1},
    {id: 2,
    weight: 1},
    {id: 3,
    weight: 1},
    {id: 4,
    weight: 1},
    {id: 5,
    weight: 1},
    {id: 6,
    weight: 1},
    {id: 7,
    weight: 1},     
]

const randomArrIndex = Math.floor(Math.random() * 8);
console.log(randomArrIndex);
balls[randomArrIndex].weight = 2

let scale = function() {
    let ballsGroup1 = [balls[0], balls[1], balls[2]];
    let ballsGroup2 = [balls[3], balls[4], balls[5]];
    let ballsGroup3 = [balls[6], balls[7]];
    let heavierGroup = [];
    let heavierBall = [];
    
    let sumWeightGroup1 = 0;
    let sumWeightGroup2 = 0;
    let sumWeightGroup3 = 0;
    
    ballsGroup1.forEach(i => sumWeightGroup1 += i.weight);
    ballsGroup2.forEach(i => sumWeightGroup2 += i.weight);
    ballsGroup3.forEach(i => sumWeightGroup3 += i.weight);

    if(sumWeightGroup1 === sumWeightGroup2) {
        heavierGroup = ballsGroup3;
    } else if (sumWeightGroup1 > sumWeightGroup2) {
        heavierGroup = ballsGroup1;
    } else {
        heavierGroup = ballsGroup2;
    }
    if (heavierGroup.length === 2) {
        if (heavierGroup[0].weight > heavierGroup[1].weight) {
            heavierBall = heavierGroup[0];
        } else {
            heavierBall = heavierGroup[1];
        }
    } else {
        if (heavierGroup[0].weight === heavierGroup[1].weight) {
            heavierBall = heavierGroup[2];
        } else if (heavierGroup[0].weight > heavierGroup[1].weight) {
            heavierBall = heavierGroup[0];
        } else {
            heavierBall = heavierGroup[1];
        }
    }
    return `The heaviest ball is ball No. ${heavierBall.id}`;
}
console.log(scale());
