import axios from 'axios'

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const ADD_SUCCESS = 'ADD_SUCCESS'
export const ADD_START = 'ADD_START'
export const ADD_SMURF = 'ADD_SMURF'
export const REMOVE = 'REMOVE'

export const fetchSmurf = () => dispatch => {
    dispatch({ type: START_FETCHING })
    axios
    .get('http://localhost:3333/smurfs')
    
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    
    .catch(err => console.log('errorz', err))
}

export const addSmurf = (smurf) => {
    const newSmurf = axios.post("http://localhost:3333/smurfs", smurf);
    return (dispatch) => {
      dispatch({ type: ADD_SMURF });
      newSmurf
        .then(({ data }) => {
          dispatch({ type: ADD_SUCCESS, payload: data });
        })
        .catch((err) => {
          console.log(err, 'errorz');
        });
    };
  };

  export const removeData = (smurf) => {
    const deleteSmurf = axios.delete("http://localhost:3333/smurfs", smurf);
    return (dispatch) => {
      dispatch({ type: REMOVE });
      deleteSmurf
        .then(({ data }) => {
          dispatch({ type: ADD_SUCCESS, payload: data });
        })
        .catch((err) => {
          console.log(err, 'errorz');
        });
    };
  };

 