import {
    QUOTES_FAILED,
    QUOTES_PENDING,
    QUOTES_SUCCESS
    } from './constants'

    
    const initialState = {
       loading: false,
       quotes:[],
    
       err: false
      };
      
      export const getQuotes = (state = initialState, action = {}) => {
       switch (action.type) {
          case QUOTES_PENDING:
            return Object.assign({}, state, { loading: true});
            
          case QUOTES_SUCCESS:
            return Object.assign({}, state, {
              loading: false,
              err: false,
             quotes: action.payload.data.quotes
            });
      
          case QUOTES_FAILED:
            return Object.assign({}, state, {
              loading: false,
              err: action.payload,
            });
  
          default:
           return state;
        }
      };