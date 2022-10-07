import { useState } from "react"

export const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  const incrementAmount = () => setCount(prevValue => prevValue + 1)

  const decrementAmount = () => setCount(prevValue => (prevValue > 1) ? prevValue - 1 : 1);

  return {
    count,
    decrementAmount,
    incrementAmount
  }
}
