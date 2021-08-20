// This function will take the value of two cards and return an integer:
//  1) 1 if player scores higher than opponent 
//  2) -1 if the player scores lower than the opponent 
//  3) 0 if the scores are the same
export default function scoreRound(playerCard,opponentCard) {
    /* 
    These if statements will translate ACE, JACK, QUEEN, KING to 1, 11, 12, and 13 respectively
    */
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
    
    // I convert the playerCard string and opponentCard string to a number
    // because a comparison of the strings was not behaving as anticipated 
    if (Number(playerCard) > Number(opponentCard)) {
        return 1;
    } else if (Number(playerCard) < Number(opponentCard)) {
        return -1;
    } else {
        return 0;
    }
}