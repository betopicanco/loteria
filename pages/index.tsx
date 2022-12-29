import { useState } from "react";

const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max);
}

const getLotericNumbers = (quantity: number, max: number): number[] => {
  const lotericNumbers: number[] = [];

  for(let i = 0 ; i < quantity ; i++) {
    const number = getRandomNumber(max);

    if(!lotericNumbers.includes(number)) {
      lotericNumbers.push(number);
    }
  }

  return lotericNumbers;
}

export default function Home() {
  const [numbers, setNumbers] = useState<number[]>([]);

  const handleClick = () => {
    setNumbers(getLotericNumbers(6, 60));
  };

  return (
    <div>
      <div className="p-6">
        <button
          className={`
        text-2xl border-2 border-blue-400 bg-black text-white px-4 py-2 rounded-md shadow-md
      `}
          onClick={handleClick}
        >
          Sortear
        </button>
      </div>

      <div className={` m-6 w-full`}>
        {numbers?.map((number, i) => {
          return (
            <span
              key={i}
              className={`border-2 border-blue-400 text-3xl p-4 text-center rounded-full mx-4`}
            >
              {number}
            </span>
          );
        })}
      </div>
    </div>
  );
}
