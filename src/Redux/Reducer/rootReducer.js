import {combineReducers} from 'redux'
import { Auth, userReducer} from './reducer';

const rootReducer = combineReducers({
    user : userReducer,
    Auth : Auth
});

export default rootReducer;