import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import tableStyle from '../common/style/tableStyle.module.css'
const Table = ({columns,colspan,data})=>{
    return(
        <table className = {tableStyle.table}>
            <thead>
        <tr className = {tableStyle.tr}>
        {columns.map((column,index)=>(
            <th key={index} className = {tableStyle.td}> {column} </th>
        ))}
        </tr>
        </thead>
        <tbody>
        {data.length  == 0 ? <tr className = {tableStyle.tr}> 
        <td colSpan = {colspan} className = {tableStyle.td}>데이터가 없습니다.</td>
        </tr>
        :data.map((user)=>(
            <tr className = {tableStyle.tr} key = {user.username}>
            <td className = {tableStyle.td}> 
                <Link href={{pathname:`/user/[username]`,
            query:{selectedUser: 'test'}}} as ={`/user/${user.username}`}>
            <a>{user.username}</a>
            </Link>
            </td>
            <td className = {tableStyle.td}> {user.password}</td>
            <td className = {tableStyle.td}> {user.name}</td>
            <td className = {tableStyle.td}> {user.telephone}</td>
            </tr>
        ))}
        </tbody>
        </table>
    );
    }
export default function UserList(){
    const columns = ["username","password","name","telephone"];
    const [data, setData] = useState([])
    const count = data.length
    useEffect(()=>{
        axios.get('http://localhost:5000/api/user/list')
        .then(res=>{setData(res.data.users)}).catch(err=>{})},[])
    
    return(<>
        <h1>사용자 목록</h1>
        {count !=0 && <h3>게시글: {data.length}개</h3>}
        <div className = {tableStyle.td}>
        <Table columns = {columns} colspan={4} data={data}/>
        </div>
        </>)
        }