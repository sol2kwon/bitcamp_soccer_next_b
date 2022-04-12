import React, { useState } from "react";
export default function SignIn(){
   const [inputs,setInputs]=useState({})
   const[result,setResult]=useState('')
   const {na,id,pw}=inputs;

   const handleChange=(e)=>{
       e.preventDefault()
       const {value,name}=e.target;
       setInputs({
           ...inputs,[name]:value})
   }
   const handleClick=(e)=>{
       e.preventDefault()
       alert(`로그인정보 : ${JSON.stringify(inputs)}`)
       //memberLogin({na, id ,pw}).then(res => setResult(res.data)).catch( err => console.log(`에러발생 : ${err}`))
   }
    return <div><h1>로그인 폼</h1>
    <form action=""> 
    <label><b>name</b></label>
    <input type= "text" onChange={handleChange} name="na"/><br/>
   
    <label><b>ID</b></label>
    <input type= "text" onChange={handleChange} name="id"/><br/>

    <label><b>pw</b></label>
    <input type= "text" onChange={handleChange} name="pw"/><br/>
    <button onClick={handleClick}>Login 전송</button><br/>
    </form>
    <div>Login 결과:{result}</div>
    </div>
}