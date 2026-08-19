const getRatingStars = (userRating = 0) => {
    const star = "★"

    if (userRating <= 5 && userRating >= 0) {
        return star.repeat(userRating);
    }

    return "";
}


const getPrice = (price = 0, discount = 0) => {

    if (discount <= 100 && discount >= 0) {
        return price - ((price * discount) / 100);
    }

    return null;
} 

const maskCard = (cardNumber = "", userSymbol = "Х") => {
    const firstCardNumbers = cardNumber.slice(0, 6);
    const lastCardNumbers = cardNumber.slice(-4);
    const maskNumbers = userSymbol.repeat(cardNumber.slice(6, -4).length);

    return firstCardNumbers + maskNumbers + lastCardNumbers;

}
