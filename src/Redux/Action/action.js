import * as types from './actionType';

// ===============Fins User===============
export const viewUser = (data) =>({
    type : types.FINDUSER,
    payload : data
});

export const viewUserSuccess = (data) =>({
    type : types.FINDUSER_SUCCESS,
    payload : data
});

export const viewUserError = (data) =>({
    type : types.FINDUSER_ERROR,
    payload : data
});

// ================== SignUp ========================

export const SignUpAction = (data) => ({
    type : types.SIGN_UP,
    payload : data
});

export const SignUpSuccess = (data) => ({
    type : types.SIGN_UP_SUCCESS,
    payload : data
});

export const SignUpError = (data) => ({
    type : types.SIGN_UP_ERROR,
    payload : data
});

// ================ SignIn ============================

export const SignInAction = (data) => ({
    type : types.SIGN_IN,
    payload : data
});

export const SignInSuccess = (data) => ({
    type : types.SIGN_IN_SUCCESS,
    payload : data
});

export const SignInError = (data) => ({
    type : types.SIGN_IN_ERROR,
    payload : data
});