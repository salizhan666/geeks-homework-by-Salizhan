const zeroArray =  [0, 3, 0, 12, 5, 0, 1];
const withoutZeroArray = [];

for (let i = 0; i < zeroArray.length; i++) {
    if (zeroArray[i] !== 0) {
        withoutZeroArray.push(zeroArray[i]);
    }
}

console.log(withoutZeroArray);

const incomeArray =  [100, -100, 500, -500, -100];
let income = 0;
let costs = 0;

for (let i = 0; i < incomeArray.length; i++) {
    if (incomeArray[i] > 0) {
        income += incomeArray[i];  
    } else if (incomeArray[i] < 0) {
        costs += incomeArray[i];
    }
}

costs *= -1;

if (income > costs) {
    console.log("Ура, Вы в плюсе");
} else if (costs > income) {
    console.log("Увы, Вы в минусе");
} else {
    console.log("Вы живёте по средствам");
}

console.log(`Доходов: ${income} Расходов ${costs}`);

const studentPoints = [10, 8, 6, 8, 9, 3, 7, 8];
const studentPointsCut = [];
const studentPointsWords = [];

for (let i = 0; i < studentPoints.length; i++) {
    studentPointsCut.push(Math.round(studentPoints[i] / 2));
}

for (let i = 0; i < studentPointsCut.length; i++) {
    if(studentPointsCut[i] === 5) {
        studentPointsWords.push("Отлично");
    } else if (studentPointsCut[i] === 4) {
        studentPointsWords.push("Хорошо");
    } else if (studentPointsCut[i] === 3) {
        studentPointsWords.push("Удовлетворительно");
    } else if (studentPointsCut[i] === 2) {
        studentPointsWords.push("Неудовлетворительно");
    } else if (studentPointsCut[i] === 1) {
        studentPointsWords.push("Плохо");
    } else {
        studentPointsWords.push(`Некорректное значение для конвертации: ${studentPoints[i]}`);
        console.warn(`${studentPoints[i]} - Значение не должно выходить за рамки [1 - 10]`);
    }
}

console.log(studentPoints);
console.log(studentPointsCut);
console.log(studentPointsWords);


