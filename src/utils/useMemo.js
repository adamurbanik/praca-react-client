import { useCallback, useMemo, useState } from "react"

function Utils() {
  const [myNumber1, setMyNumber1] = useState(0);
  const [myNumber2, setMyNumber2] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const add = () => {
    return myNumber1 + myNumber2
  }
  const resultAdd =  useMemo(add, [myNumber1, myNumber2])
  const sumAndMultiply = () => {
    return (number1, number2) => {
      return (number1 + number2) * multiplier
    }
  }
  const calculate = useMemo(sumAndMultiply, [multiplier]);
  const addCb = useCallback(add, [myNumber1, myNumber2]);

}