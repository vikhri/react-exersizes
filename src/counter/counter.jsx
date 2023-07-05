import {useState} from "react";

function Counter () {
  const [Step, setStep] = useState(1);
  const [Count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + Count);


  function DecreaseStep() {
    if (Step > 1) setStep((curStep) => curStep - 1)
  }
  function IncreaseStep() {
    if (Step < 10) setStep((curStep) => curStep + 1)
  }

  function DecreaseCount() {
    setCount((curCount) => curCount - Step)
  }

  function IncreaseCount() {
    setCount((curCount) => curCount + Step)
  }

  function HandleReset() {
    setCount(0);
    setStep(1);
  }

  return (
  <>
    <h1>DATE COUNTER</h1>
  <div
    style={{padding: '50px', display: 'flex', flexDirection: "column", rowGap: '30px', maxWidth: "500px", margin: "0 auto" }
  }>
    <div>
    <label
    style={{display: 'flex', columnGap: '10px'}}
    >Step:
    <input
      type='range'
      min='0'
      max='10'
      value={Step}
      onChange={(e) => setStep(Number(e.target.value))}
    />
    <div>
      <button onClick={ DecreaseStep }>-</button>
      <input
        style={{width: '40px'}}
        type='number'
        value={Step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <button onClick={ IncreaseStep }>+</button>
    </div>
    </label>
    </div>
    <label
      style={{display: 'flex', columnGap: '10px'}}>
      Count:
      <button onClick={ DecreaseCount }>-</button>
      <span>{Count}</span>
      <button onClick={ IncreaseCount }>+</button>
    </label>
    <div>
      <span>
        {Count === 0 ?
          "Today is "
          : Count > 0 ?
            `${Count} days from today is `
            : `${Math.abs(Count)} days ago was `}
      </span>
      <span>{date.toDateString()}</span>
    </div>

    {Count !== 0 || Step !== 1 ?
      (
      <button onClick={HandleReset}>Reset</button>
      ) : null }
  </div>
  </>
  )
}

export default Counter