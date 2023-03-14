import * as types from '../Action/actionType';

let userState = {
    users : []
}

export const userReducer = (state = userState, action) => {
    console.log("call this..");
    switch (action.type) {
        // case types.FINDUSER:
        case types.FINDUSER_SUCCESS:
            return{
                ...state,
                users : action.payload
            }
                
        default:
            return state;
    }
}

let authState = {
    SuccessMessage : "",
    auth : {}
}

export const Auth = (state = authState, action) => {
    switch (action.type) {
        case types.SIGN_UP_SUCCESS:
            return {
                ...state,
                SuccessMessage : "Register Successfully"
            }
            
        case types.SIGN_IN_SUCCESS:
            return {
                ...state,
                SuccessMessage : "Login Successfully",
                auth : action.payload
            }
        
        // case types.LOGOUT:
        //     return {
        //         ...state,
        //         SuccessMessage : "Logout SuccessFully",
        //         auth : {}
        //     }
        default:
            return state;
    }
}