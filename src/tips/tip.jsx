
function Tip () {
  return (
  <>
    <h1 >TIP CALCULATOR</h1>
    <Form />
  </>)
}


function Form () {
  return (
    <div style={{display: "flex", flexDirection: "column", rowGap: "20px", padding: '20px 0 60px'}}>
      <Bill />
      <Tips>How did you like?</Tips>
      <Tips>How your friend likes?</Tips>
      <p style={{fontSize: '24px', fontWeight: '700'}}>You pay $X ($Y + $Z tip)</p>
      <Reset />
  </div>
  )}

function Bill () {
  return (
    <label>
      How much was the bill?
      <input type='number'></input>
    </label>
  )
}

function Tips ({children}) {
  return (
    <label>{children}
      <select>
        <option value='0.1'>It was good (10%)</option>
        <option value='0'>It was bad (0%)</option>
        <option value='0.2'>It was great (20%)</option>
      </select>
    </label>
  )
}

function Reset () {
  return <button
    type='button'
    style={{width: '12em'}}
  >RESET</button>
}

export default Tip
