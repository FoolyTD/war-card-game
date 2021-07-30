// This function will score each round
export default function scoreRound(playerCard,opponentCard) {
    console.log("playerCard", playerCard);
    console.log("opponentCard", opponentCard);
    if (playerCard === "ACE") {
        playerCard = "1";
    }
    if (opponentCard === "ACE") {
        opponentCard = "1";
    }
    if (playerCard === "JACK") {
        playerCard = "11";
    }
    if (opponentCard === "JACK") {
        opponentCard = "11";
    }
    if (playerCard === "QUEEN") {
        playerCard = "12";
    }
    if (opponentCard === "QUEEN") {
        opponentCard = "12";
    }
    if (playerCard === "KING") {
        playerCard = "13";
    }
    if (opponentCard === "KING") {
        opponentCard = "13";
    }

    if (playerCard > opponentCard) {
        return 1;
    } else if (playerCard < opponentCard) {
        return -1;
    } else {
        return 0;
    }
}