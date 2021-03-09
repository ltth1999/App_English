import {GET_EDIT_FORM_PROFILE} from './action'

const initialState = {
    EditProfile : {
        firstName : 'Thu',
        lastName : 'Hang',
        date:'12/10/2020',
        phone:'023554687',
        email:'heololi99@gmail.com',
        country:'Dak Lak',
        city:'VietNam'
      }
}

const Reducer = (state = initialState , action) =>{
    switch (action.type) {
        case GET_EDIT_FORM_PROFILE:  
           return {
               ...state,
               EditProfile: action.payload.formEdit
           }
    
        default:
            return state    
        }
}

export default Reducer