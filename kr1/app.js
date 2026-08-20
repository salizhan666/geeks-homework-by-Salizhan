const getRandom = (min = 0, max = 0) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const shuffle = (userArray = []) => {
    const arrayRandom = [];
    const userArrayLength = userArray.length;

    for(let i = 0; i < userArrayLength; i++) {
        arrayRandom.push(userArray.splice(getRandom(0, userArray.length - 1), 1)[0]);
    }

    return arrayRandom;
} 

console.log(shuffle(["привет", "пока", "lol", "kek"]));
console.log(shuffle([1, 2, 3, 4, 5]));

