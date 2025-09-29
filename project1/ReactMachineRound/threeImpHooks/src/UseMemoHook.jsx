import React, { useMemo, useState } from 'react'
import './App.css';

const UseMemoHook = () => {
    const[text,setText] = useState(0);
    console.log(text,"comRendering");

 function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

function nthPrime(n) {
  if (n < 1) return null;

  let count = 0;
  let num = 2;

  while (true) {
    if (isPrime(num)) {
      count++;
      if (count === n) {
        return num;
      }
    }
    num++;
  }
}


  // const numberInput = parseInt(text);
  // const primeNumber = !isNaN(numberInput) ? nthPrime(numberInput) : '';

const numberInput = parseInt(text);
const prime = useMemo(() => {
  return !isNaN(numberInput) ? nthPrime(numberInput) : '';
}, [numberInput]);


  return (
    <>
    <div className='intputCOntainer'>
         <input type='number' value={text} placeholder='EnterPrimeNumber' onChange={(e)=>setText(e.target.value)}/>
    </div>
    <div>
      <h2>Nth Prime Number:{prime}</h2>
    </div>
    </>
  )
}

export default UseMemoHook
