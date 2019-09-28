import React from 'react';
import { cashDispenser } from '../services/cash-dispenser-service';

//services
import { setLocalStorage, getLocalStorage, removeLocalStorage } from '../services/local-storage-service';

export const Withdrawal = (props) => {
    let amountToWithdraw=props.location.state.amount;
    let availableBalance=getLocalStorage('balance');

    if (availableBalance < amountToWithdraw) {
    }
    
    const answer = cashDispenser(amountToWithdraw);
    
    if (answer.length != 0) {        
        availableBalance=availableBalance - amountToWithdraw;
        setLocalStorage('balance', availableBalance);
    }

    const noHandler = ()=>{
        removeLocalStorage('balance');
        props.history.push('/goodbye');
    }

    function yesHandler() { 
        props.history.push(
            {
                pathname:'/account',
                state: {balance: availableBalance}
            }
        );
    }

  return (
    <div>
    <h1>Available to withdraw : {availableBalance}</h1>
     {  
         (answer.length === 0) ? <h3>Please enter amount in multiples of 5</h3> :
        <table>
            <thead>
                <tr><th>Please take your cash</th></tr>
            </thead>
            <tbody>
                <tr>
                    {answer.sort((a,b)=>a-b).map((amount,index)=>
                        <tr key={index}>${amount}.00</tr>)}
                </tr>
            </tbody>
        </table>
    }
    <h5>Do you want to make another transaction?</h5>
    <button onClick={noHandler}>No</button>
    <button onClick={yesHandler}>Yes</button>
    </div>
  )
}
