import {useState} from "react";

function Tip () {
  return (
  <>
    <h1 >TIP CALCULATOR</h1>
    <Form />
  </>)
}


function Form () {
  const [total, setTotal] = useState('');
  const [myTips, setMyTips] = useState(0);
  const [friendTips, setFriendTips] = useState(0);

  let tipSum = Math.floor(((myTips + friendTips) / 2  * total) * 100) / 100;
  let totalSum = total + tipSum;

  function handleReset() {
    setTotal('');
    setFriendTips(0)
    setMyTips(0)
  }

  return (
    <div style={{display: "flex", flexDirection: "column", rowGap: "20px", padding: '20px 0 60px', width: '400px' }}>
      <Bill onHandle={setTotal} sum={total}/>
      <Tips onHandle={setMyTips} percentage={myTips}>How did you like?</Tips>
      <Tips onHandle={setFriendTips} percentage={friendTips}>How your friend likes?</Tips>
      <p style={{fontSize: '24px', fontWeight: '700'}}>You pay ${totalSum} (${total} + ${tipSum})</p>
      <Reset onHandle={handleReset}/>
  </div>
  )}

function Bill ({onHandle, sum}) {
  return (
    <label style={{display: 'flex', justifyContent: 'space-between',}}>
      How much was the bill?
      <input value={sum} style={{width: '70px'}} type='number' onChange={(e) => onHandle(Number(e.target.value))}/>
    </label>
  )
}

function Tips ({onHandle, percentage, children}) {
  return (
    <label style={{display: 'flex', justifyContent: 'space-between'}}>{children}
      <select value={percentage} onChange={(e) => onHandle(parseFloat(e.target.value))}>
        <option value='0'>It was bad (0%)</option>
        <option value='0.1'>It was good (10%)</option>
        <option value='0.2'>It was great (20%)</option>
      </select>
    </label>
  )
}

function Reset ({onHandle}) {
  return <button
    type='button'
    style={{width: '12em'}}
    onClick={onHandle}
  >RESET</button>
}

export default Tip
