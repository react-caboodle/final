import React from 'react';

//services
import { getLocalStorage, setLocalStorage } from '../services/local-storage-service';

export const Account = (props) => {
  console.log('account ', props)
    const balance = getLocalStorage('balance');
    let amount=0;

  const onWithdraw = (e)=> {
    e.preventDefault();

    props.history.push(
      {
        pathname: '/withdrawal',
        state: {amount, balance}
      }
    );
  }

  const handleChange = (e)=>{
    e.preventDefault();
    amount = e.target.value;
  }


  return (
    <div>
    <h1>Available Balance is : {balance}</h1>
    <p>Please enter amount to withdraw</p>
    <form>
      <input type='text' placeholder='Enter amount' onChange={handleChange}/>
      <button onClick={(e)=>onWithdraw(e)}>Submit</button>
    </form>
    </div>
  )
}