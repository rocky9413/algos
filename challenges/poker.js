/*
 * Build a poker checking function that takes in two arrays of five elements,
 * where each array represents a player's hand and
 * each element represents a card from a standard deck of cards:
 * 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
 *
 * The function should return either "Player 1 wins",
 * "Player 2 wins", or "Draw" using the following ranking system:
 *
 * 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card
 * Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
 *
 * If two players have the same rank, then player with the highest card wins.
 * Example: [4, 4, 4, 2, 14] beats [8, 8, 8, 4, 5] because the first hand has the highest card.
 *
 * Clearly real-world poker has more complex rules for tied ranks, but we want you
 * to focus on overall architecture rather than edge cases. Have fun!
 *
 * BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
 * BONUS2: Create a deck of cards function that generates two random hands for you.
 */
function poker(hand1, hand2) {
  let obj1 = {};
  for (let i = 0; i < hand1.length; i++) {
    if (obj1[hand1[i]]) obj1[hand1[i]]++;
    else obj1[hand1[i]] = 1;
  }
  rank(hand1);
}

function rank(arr) {
  arr = arr.sort((a, b) => b - a);
  console.log(arr);
  let obj1 = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj1[arr[i]]) obj1[arr[i]]++;
    else obj1[arr[i]] = 1;
  }
  console.log(obj1);
}

// poker([3, 5, 5, 5, 2], [4, 6, 7, 8, 8]);

// function poker (hand1, hand2) {
//   ​
//     function checkStraight (hand) {
//       const checkHand = hand.slice().sort();
//       for (let i = 1; i <= 4; i++) {
//         // console.log(checkHand[i - 1] + 1)
//         if (+checkHand[i] !== +checkHand[i - 1] + 1) { return false; }
//       }
//       return true;
//     }
//   ​
//     function rankHand (hand) {
//       const numCards = {};
//       console.log(numCards)
//       hand.forEach(card => {
//         return numCards[card] = numCards[card] + 1 || 1
//       });
//       // combos is an arr of frequency of card values
//       const combos = Object.values(numCards);
//   ​
//       // if any value has a 4 (a straight), give that hand 6 pts
//       if (combos.includes(4)) return 6;
//   ​
//       // if any value has a 3 (full house), give that hand 5 pts
//       if (combos.includes(3) && combos.includes(2)) return 5;
//   ​
//       // if any value has a 4 (a straight), give that hand 6 pts
//       if (checkStraight(Object.keys(numCards))) { return 4; }
//   ​
//       // if 3 of a kind -> 3 pts
//       if (combos.includes(3)) { return 3; }
//   ​
//       // if 2 pairs -> 2 pts
//       // checking to see if there's two values that are both 2
//       if (combos.filter((num) => num === 2).length === 2) { return 2; }
//   ​
//       // if 1 pair -> 1 pt
//       // see if any value is 2
//       if (combos.includes(2)) { return 1; }
//   ​
//       // if nothing -> 0
//       return 0;
//     }
//   ​
//     let rank1 = rankHand(hand1);
//     let rank2 = rankHand(hand2);
//   ​
//     if (rank1 === rank2) {
//       rank1 = Math.max(...hand1);
//       rank2 = Math.max(...hand2);
//       if (rank1 === rank2)
//         return 'Draw';
//     }
//   ​
//     return (rank1 > rank2) ? 'Player 1 wins' : 'Player 2 wins';
//   }
//   ​
//   /*
//   Extension where you create random decks
//   -- doesn't account for repeats
//   */
//   ​
//   // Create random int between a min and max
//   function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
//   }
//   // Gen hand based on 5 random ints
//   function genRandomHand(){
//     let hand = [];
//     for(let i = 0; i < 5; i++){
//       hand.push(getRandomInt(2,15));
//     }
//     console.log('hand: ', hand)
//     return hand;
//   }

module.exports = poker;
