function reservationsReducer(state = {reservations: [], requesting: false }, action){
    switch (action.type){

        case "ADD_RESERVATIONS":
            return {...state,
                reservations: action.reservations,
                requesting: false
            }

        case "FETCH_RESERVATIONS":
            return {
                ...state,
                reservations: state.reservations,
                requesting: true
            }

        case "POST_RESERVATION":
            return {
                ...state,
                reservations: action.reservations,
                requesting: true
            }

        case "ADD_NEW_RESERVATIONS":
            return {...state,
                reservations: action.reservations,
                requesting: false
            }
        
        case "UPDATE_RESERVATION":
            return {                
                ...state,
                reservations: state.reservations,
                requesting: true

            }

        default:
            return state;

    }
}

export default reservationsReducer