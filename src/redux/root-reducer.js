import {CombineReducers} from 'redux'
import userReducer from './user/user.reducer'

export default combineReducers({
    user: userReducer
});