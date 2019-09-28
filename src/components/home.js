import React, {Component} from 'react';
import PinInput from "react-pin-input";


//services
import { login } from '../services/account-service';
import { setLocalStorage, getLocalStorage } from '../services/local-storage-service';

export default class Home extends Component {    

  prepareData() { 
    //prepare the data
    let fiver=[...Array(4)];
    fiver.fill(5);
    let tenner=[...Array(15)];
    tenner.fill(10);
    let twenty=[...Array(7)];
    twenty.fill(20);    
    //set the following in local storage.
    const cash= [fiver, tenner, twenty];
    setLocalStorage('cash', cash);
   }

     

      onChange = value => {
        if (value.length === 4) {      
          login(value).then(data => {
            if (typeof data ==='number') {
              setLocalStorage('balance', data);
              this.props.history.push(
                  {
                      pathname:'/account',
                      state: {balance: data}
                  }
              );
            } else {           
              this.props.history.push(
                {
                  pathname:'/error',
                  state: {error: data}
                }
              )
            }
          });
        }
      };
    
      onClear = () => {        
        this.pin.clear();
      };

    render() {
        return (
            <div>
            <h1>Automated Teller</h1>
            <p>Please enter your pin code to begin</p>
            <PinInput
                length={4}
                focus
                ref={p => (this.pin = p)}
                type="numeric"
                onChange={this.onChange}
            />

        <button onClick={this.onClear}>Clear</button>  

        </div>
    );
}
}
