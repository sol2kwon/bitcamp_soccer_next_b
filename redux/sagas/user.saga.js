import { YoutubeFilled } from '@ant-design/icons'
import {PayloadAction} from '@reduxjs/toolkit'
import {call,deplay,put,takeLatest} from 'redux-saga/effects'
import{
    JoinPaylode,joinRequest,joinSuccess,joinFailure
} from'../reducers/user.reducer'

function* join(action){
    try{
        alert('saga 내부 join 성공')
        const result = yield call(userApI.join, action,paylodad)
        yield put(joinSuccess(result))
        window.location.href = 'user/login'
    }catch(error){
        alert('saga 내부 join 실패')
        yield put(joinFailure(error))
    }

}