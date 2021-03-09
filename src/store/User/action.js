const GET_EDIT_FORM_PROFILE = 'GET_EDIT_FORM_PROFILE'


export const actEditProfile = (formEdit) =>{
    return{
        type : GET_EDIT_FORM_PROFILE,
        payload:{
            formEdit
        }
    }
}

export {
    GET_EDIT_FORM_PROFILE
}