import  axios from 'axios';

export const login = (pinCode) => {
 
const apiUrl = 'https://frontend-challenge.screencloud-michael.now.sh/api/pin/';

  return axios.post(apiUrl,{"pin":pinCode})
    .then(data => data.data.currentBalance)
    .catch(err=> err.response.data.error);  
}