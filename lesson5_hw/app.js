const hamsterButton = document.getElementById("hamsterButton");
const coinValue = document.getElementById("coinValue");
const energyValue = document.getElementById("energyValue");

const valueOperation = () => {
    let coin = Number(coinValue.innerText);
    let energy = Number(energyValue.innerText);

    if (energy !== 0) {
        energy -= 5;
        coin += 5;

        coinValue.innerText = coin.toString();
        energyValue.innerText = energy.toString();
    }

}


hamsterButton.addEventListener("click", valueOperation);