
import axios from "axios";
import { useEffect,useState } from "react";
import tableStyle from '../common/style/tableStyle.module.css'

const Table =({columns,colspan,data})=>{
    return(
        <table className={tableStyle.tr}>
        <thead>
        <tr className={tableStyle.tr}>
        {columns.map((column)=>(
            <th key = {column} className = {tableStyle.td}>{column}</th>
        ))}
        
        </tr>
        </thead>
        <tbody>
        {data.length == 0 ? <tr className={tableStyle.tr}>
        <td colSpan={colspan} className={tableStyle.td}>데이터가 없음</td>
        </tr>
        :data.map((board)=>(
            <tr className = {tableStyle.tr} key = {board.passengerId}>
            <td className = {tableStyle.td}> {board.passengerId}</td>
            <td className = {tableStyle.td}> {board.name}</td>
            <td className = {tableStyle.td}> {board.teamId}</td>
            <td className = {tableStyle.td}> {board.subject}</td>
            </tr>
        ))}
        </tbody>
        </table>
    );
}

export default function BoardList(){
    const columns = ["passengerId","name","teamId","subject"];
    const [data,setData]=useState([])
    const count = data.length;
    useEffect(()=>{
        axios.get('http://localhost:5000/api/board/boardlist').then(res=>{setData(res.data.boards)}).catch(err=>{})},[])
    return (<>
        <h1>게시판</h1>
        {count !=0 && <h3>게시글: {data.length}개</h3>}
        <div className= {tableStyle.td}>
        <Table columns={columns} colspan={4} data={data}/>
        </div>
        </>)}