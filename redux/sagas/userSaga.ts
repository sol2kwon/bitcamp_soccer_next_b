import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, delay, takeLatest} from 'redux-saga/effects'
import {joinApi} from '../api/userApi'
import {JoinPayload,joinRequest} from '../reducers/userReducer.ts'
function* join(action:  PayloadAction <JoinPayload>){
    try{
        alert('*** saga 내부 join 성공***')
    }catch(error){
        alert('*** saga내부 join 실패 ***')
    }
}
export function* watchJoin(){
    yield takeLatest(joinRequest.type,join)
}