const isStraight = cardsArray => {
  if (cardsArray.length > 7 || cardsArray.length < 5) {
    console.log("NO STAIR");
    return "No Stair";
  } else {
    const sortedArray = cardsArray.sort((a, b) => a - b);
    const consecutiveCount = howManyConsecutives(sortedArray);
    if (consecutiveCount >= 5) {
      console.log("STAIR!!!!!");
      return "Stair!";
    } else {
      console.log("NO STAIR");
      return "No Stair";
    }
  }
};

const howManyConsecutives = sortedArray => {
  let numberOfConsecutives = 0;
  sortedArray.forEach((cardNumber, index) => {
    if (cardNumber !== sortedArray[sortedArray.length - 1]) {
      if (
        areConsecutives(cardNumber, sortedArray[index + 1]) ||
        (sortedArray.includes(14) && sortedArray.includes(2))
      ) {
        numberOfConsecutives++;
      }
    } else {
      numberOfConsecutives++;
    }
  });
  return numberOfConsecutives;
};

const areConsecutives = (current, currentNext) => {
  if (current + 1 === currentNext) {
    return true;
  }
  return false;
};

module.exports = isStraight;
