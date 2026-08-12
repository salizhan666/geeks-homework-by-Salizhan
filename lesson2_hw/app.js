// Задание номер 1

const inpurUser = prompt("Пожалуйста введите число [0]-[8]");
const userNumber = Number(inpurUser);


if(Number.isNaN(userNumber) || inpurUser === null) {
    console.error("ИСПОЛЬЗУЙТЕ ТОЛЬКО ЧИСЛА ОТ 0 ДО 8");
    console.warn(`ПОЛЬЗОВАТЕЛЬ ВВЕЛ: ${inpurUser}`);
} else {
    if(userNumber === 0) {
        console.log("Солнце - просто солнцe")
    } else if(userNumber === 1) {
        console.log("Меркурий");
    } else if(userNumber === 2) {
        console.log("Венера")
    } else if(userNumber === 3) {
        console.log("Земля")
    } else if(userNumber === 4) {
        console.log("Марс")
    } else if(userNumber === 5) {
        console.log("Юпитер")
    } else if(userNumber === 6) {
        console.log("Сатурн")
    } else if(userNumber === 7) {
        console.log("Уран")
    } else if(userNumber === 8) {
        console.log("Нептун")
    } else {
        console.warn("Дальше ничего нет. Наверное...");
    }
}

// Задание номер 2

const userPetrol = prompt("Введите тип топлива [АИ-92, АИ-95, АИ-98, ДТ, СГ]");
const userSum = Number(prompt("На сколько сом Вы хотите заправиться?"));

if(userSum === NaN || userSum === 0 || userPetrol === "" || userPetrol === null) {
    console.error("ПОЖАЛУЙСТА, ЗАПОЛНИТЕ ДАННЫЕ КОРРЕКТНО");
    console.warn(`ПОЛЬЗОВАТЕЛЬ ВВЕЛ: ${userPetrol}, ${userSum}`);
} else {
    if(userPetrol === "АИ-92") {
        const result = Number((userSum / 86.9).toFixed(1));       
        console.log(`Вы получите ${result}`);
    } else if(userPetrol === "АИ-95") {
        const result = Number((userSum / 109,9).toFixed(1));       
        console.log(`Вы получите ${result}`);
    } else if(userPetrol === "ДТ") {
        const result = Number((userSum / 99.9).toFixed(1));       
        console.log(`Вы получите ${result}`);
    } else if(userPetrol === "СГ") {
        const result = Number((userSum / 48.8).toFixed(1));       
        console.log(`Вы получите ${result}`);
    } else if(userPetrol === "АИ-98") {       
        console.warn(`На данный момент данное топливо отсутствует`);
    }  else {
        console.error("ПОЖАЛУЙСТВА, ВВЕДИТЕ ТОПЛИВО ИЗ КАТАЛОГА, ДОСТУПНЫЕ ДАННЫЕ ДЛЯ ВВОДА: [АИ-92, АИ-95, АИ-98, ДТ, СГ]")
        console.warn(`ПОЛЬЗОВАТЕЛЬ ВВЕЛ: ${userPetrol}`);
    }
}

// Задание номер 3

const userCard = prompt("Введите Ваш тип карты [S(Серебрянная), G(Золотая), P(Платиновая)]");
const userLiter = prompt("Сколько литров Вы заправили? (Дробные числа используйте с помощью символа '.')");
const userLiterNumber = Number(userLiter);

if(Number.isNaN(userLiterNumber) || userLiter === null) {
    console.error("ПОЖАЛУЙСТВА ВВЕДИТЕ СКОЛЬКО ЛИТРОВ ВЫ ЗАПРАВИЛИ");
    console.warn(`ПОЛЬЗОВАТЕЛЬ ВВЕЛ: ${userLiter}`);
} else {
    if(userCard === "S" || userCard === "s") {
        const result = Number((userLiterNumber * 0.5).toFixed(2));
        console.log(`Вы получите балов: ${result}`);
    } else if(userCard === "G" || userCard === "g") {
        const result = Number((userLiterNumber * 0.75).toFixed(2));
        console.log(`Вы получите балов: ${result}`); 
    } else if(userCard === "P" || userCard === "p") {
        console.log(`Вы получите балов: ${Number(userLiterNumber.toFixed(2))}`); 
    } else {
        console.error("ПОЖАЛУЙСТА, ВВЕДИТЕ ДАННЫЕ ИЗ ПРЕДОСТАВЛЕННОГО СПИСКА: [S(Серебрянная), G(Золотая), P(Платиновая)]")
        console.warn(`ПОЛЬЗОВАТЕЛЬ ВВЕЛ: ${userCard}`);
    }
}