import {combineReducers} from 'redux'
import UserReducer from './User/reducer'


const MyReducer = combineReducers({
    User: UserReducer,
})
export default MyReducer