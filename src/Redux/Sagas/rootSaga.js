import {createBrowserHistory} from 'history';
import * as types from '../Action/actionType';
import {all,call,fork,put,takeEvery} from 'redux-saga/effects'
import {getUserApi, userSignInApi, userSignUpApi} from '../../Api/api';
import { SignInError, SignInSuccess, SignUpError, SignUpSuccess, viewUserError, viewUserSuccess } from '../Action/action';

function* getUsers({payload}){
    console.log("call function");
    try {
        const response = yield call(getUserApi,payload);
        console.log("response...",response);
        if(response.data.code === 200){
            yield put(viewUserSuccess(response?.data?.data?.list));
        }
    } catch (e) {
        console.log("e..",e);
        yield put(viewUserError(e));
    }
}

function* UserSignUp({payload}){
    try {
        const response = yield call(userSignUpApi,payload)
        if(response.data.code === 200){
            console.log("Success..",response);
            yield put(SignUpSuccess(response.data.data))
        }
    } catch (e) {
        yield put(SignUpError(e));
    }
}

function* UserSignIn({payload}){
    try {
        const response = yield call(userSignInApi,payload);
        if(response?.data?.code === 200){
            console.log("response...",response);
            yield put(SignInSuccess(response?.data?.data));
            localStorage.setItem("username",response?.data?.data?.user?.firstname)
            localStorage.setItem("token",response?.data?.data?.token)
            localStorage.setItem("login",JSON.stringify(response.data.data));
        }
    } catch (e) {
        yield put(SignInError(e));
    }
}

function* callGetUsers(){
    yield takeEvery(types.FINDUSER,getUsers)
}

function* callUserSignUp(){
    yield takeEvery(types.SIGN_UP,UserSignUp);
}

function* callUserSignIn(){
    yield takeEvery(types.SIGN_IN,UserSignIn);
}

const saga = [
    fork(callGetUsers),
    fork(callUserSignUp),
    fork(callUserSignIn),
]

export default function* rootSaga(){
    yield all([...saga]);
}