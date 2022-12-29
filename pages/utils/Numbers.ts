export const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max);
}

export const getLotericNumbers = (quantity: number, max: number): number[] => {
  const lotericNumbers: number[] = [];

  for(let i = 0 ; i < quantity ; i++) {
    const number = getRandomNumber(max);

    if(!lotericNumbers.includes(number)) {
      lotericNumbers.push(number);
    }
  }

  return lotericNumbers;
}