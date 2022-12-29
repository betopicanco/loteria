import { useState } from "react";
import { getLotericNumbers } from "./utils/Numbers";

export default function Home() {
  const [numbers, setNumbers] = useState<number[]>([]);

  const handleClick = () => {
    setNumbers(getLotericNumbers(6, 60));
  };

  return (
    <div>
      <div className="p-12">
        <button
          className={`
        text-2xl border-2 border-blue-400 bg-black text-white px-4 py-2 rounded-md shadow-md
      `}
          onClick={handleClick}
        >
          Sortear
        </button>
      </div>

      <div className={` m-12 w-full`}>
        {numbers?.map((number) => {
          return (
            <span
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
