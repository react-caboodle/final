import React from 'react';

//services
import { getLocalStorage, setLocalStorage, removeLocalStorage } from '../services/local-storage-service';

export const Overdraft = (props) => {


    let amountToWithdraw=props.location.state.amount;
    let availableBalance=props.location.state.balance;
    const handleNo = ()=>props.history.push('/goodbye');
    const handleYes = () => {
        let overdraft = parseInt(getLocalStorage('overdraft'));
        let balanceWithOverdraft=availableBalance + overdraft;
        setLocalStorage('overdraft',0);
        setLocalStorage('balance',balanceWithOverdraft);
        props.history.push(
            {
                pathname: '/account'
            }
        );}

  return (
    <div>
        <h1>Would you like to use your 100 gbp overdraft?</h1>
        <button onClick={handleNo}>No</button>
        <button onClick={handleYes}>Yes</button>
    </div>
  )
}