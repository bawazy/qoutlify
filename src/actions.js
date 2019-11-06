import {
QUOTES_FAILED,
QUOTES_PENDING,
QUOTES_SUCCESS
} from './constants'
import axios from 'axios';

export const getQoutes = () => dispatch => {
    dispatch({ type: QUOTES_PENDING })
    let apiKey ='159897cb0c59b4e75a5c2a7b51f33e88';
    axios.get('https://favqs.com/api/quotes/',{ headers:{Authorization:`Bearer ${apiKey}`}})
        // .then(res=> res.json())
      .then(res => dispatch({ type: QUOTES_SUCCESS, payload: res }))
      .catch(err => dispatch({ type: QUOTES_FAILED, payload: err }));
  };