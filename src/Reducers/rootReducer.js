import { combineReducers } from 'redux';
import reservationsReducer from './reservationsReducer';
import usersReducer from './usersReducer';
import restaurantsReducer from './restaurantsReducer';


const rootReducer = combineReducers({reservations: reservationsReducer, 
                                        restaurants: restaurantsReducer, 
                                        users: usersReducer
                                       });

export default rootReducer;