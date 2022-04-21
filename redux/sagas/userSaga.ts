import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { userActions } from '/redux/reducers/userReducer.ts';
import { joinApi,loginApi } from '../api/userApi.ts'

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
        const response : UserJoinSuccessType = yield joinApi(user.payload)
        yield put(userActions.joinSuccess(response))
    }catch(error){
        alert('진행3: 사가 내부 조인 실패' + error)
         yield put(userActions.joinFailure(error))
    }
}
function* login(login: UserLoginType){
    try{
        alert('진행3: 사가 내부 로그인 요청'+JSON.stringify(login))
        const response : UserLoginSuccessType = yield loginApi(login.payload)
        yield put(userActions.loginSuccess(response))
        window.location.href = '/'
    }catch(error){
        alert('진행3: 사가 내부 로그인 실패')
         yield put(userActions.loginFailure(error))
         window.location.href = '/user/login'
    }
}
export function* watchJoin(){
    yield takeLatest(userActions.joinRequest, join)
}
export function* watchLogin(){
    yield takeLatest(userActions.loginRequest, login)
}