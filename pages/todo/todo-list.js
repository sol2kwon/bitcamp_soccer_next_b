import tableStyle from '../common/style/tableStyle.module.css'
import { useState } from 'react';

const Table = ({data,colspan}) =>{
    return(
        
        <table className = {tableStyle.table}>
            <thead>
                <tr className = {tableStyle.tr}>
                    <th className ={tableStyle.th}>스케줄 목록</th>
                </tr>
            </thead>
            <tbody>
                {data.length == 0 ? <tr className={tableStyle.tr}>
                <td colSpan={colspan} className = {tableStyle.td}>일정이 없습니다.</td>
                </tr>
                :data.map((todo)=>(
                    <tr className={tableStyle.tr} key={todo.context}>
                        <td className={tableStyle.tr} key={todo.context}></td>
                    </tr>
            
    ))}
        </tbody>
    </table>
    )}
export default function TodoList(){
const [ data,setData] = useState([])
const count = data.length
    return(<>
        <head>
            <title> Todo | 스케줄 목록</title>
        </head>
        <h1>스케줄 목록</h1>
        <Table data = {data}></Table>
        </>)
}