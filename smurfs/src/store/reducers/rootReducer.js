const initialState = {
    data: [],
    isFetching: false,
    error: '',
    updated: false,
    isSaving: false
    }

    export const rootReducer = (state = initialState, action) => {
        console.log(state)
    switch(action.type) {
        case "START_FETCHING":
            console.log(state, action);
            return {
                ...state,
                isFetching: true,
                updated: false
            }
            case "FETCH_SUCCESS":
                return {
                    ...state,
                    isFetching: false,
                    error: '',
                    data: action.payload,
                    update: false,
                }
                case "ADD_SUCCESS":
                    return {
                        ...state,
                        updated: true
                    }
                    case "ADD_SMURF":
                        return {
                            ...state
                        }
                        case "REMOVE":
                            return {
                                ...state,
                                data: state.data.filter(value => value.id !== action.id )
                            }
                default: 
                return state
    }
    
    }