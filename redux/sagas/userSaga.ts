import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { userActions } from '/redux/reducers/userReducer.ts';
import { joinAPi,loginAPi } from '../api/userApi.ts'

interface UserJoinType{
    type: string;
    payload: {
        userid:string, password:string, email:string, 
        name:string, phone:string, birth:string, address:string
    }
}
interface UserLoginType{
    type: string;
    payload: {
        userid:string, password:string
    }
}
interface UserJoinSuccessType{
    type: string;
    payload: {
        userid: string
    }
}
interface UserLoginSuccessType{
    type: string;
    payload: {
        userid:string, email:string, 
        name:string, phone:string, birth:string, address:string
    }
}

function* join(user: UserJoinType){
    try{
        const response : UserJoinSuccessType = yield joinAPi(user.payload)
        yield put(userActions.joinSuccess(response))
    }catch(error){
         yield put(userActions.joinFailure(error))
    }
}
function* login(login: UserLoginType){
    try{
        const response : UserLoginSuccessType = yield loginAPi(login.payload)
        yield put(userActions.loginSuccess(response))
    }catch(error){
         yield put(userActions.joinFailure(error))
    }
}
export function* watchJoin(){
    yield takeLatest(userActions.joinRequest, join)
}
export function* watchLogin(){
    yield takeLatest(userActions.loginRequest, login)
}