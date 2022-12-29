import { useState } from 'react'
import { getLotericNumbers } from './utils/Numbers';

export default function Home() {
  const [numbers, setNumbers] = useState<number[]>([]);

  const handleClick = () => {
    setNumbers(getLotericNumbers(6, 60));
  }

  return (
    <div>
      <button onClick={handleClick}>Sortear</button>

      {numbers?.map((number) => (
        <p>{number}</p>
      ))}
    </div>
  )
}
