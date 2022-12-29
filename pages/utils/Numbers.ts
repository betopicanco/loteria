export const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max);
}

export const getLotericNumbers = (quantity: number, max: number): number[] => {
  const lotericNumbers: number[] = [];

  for(let i = 0 ; i < quantity ; i++) {
    lotericNumbers.push(getRandomNumber(max));
  }

  return lotericNumbers;
}