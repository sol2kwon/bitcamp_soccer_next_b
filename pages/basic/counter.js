import React,{useState} from "react"
 
export default function Counter(){
    const [count, setCount] = useState(0)

    return(
        <div>
        <button onClick={()=>{setCount(count + 1)}}>+</button> <br/>
        <button onClick={()=>(setCount(count -1))}>-</button> <br/>
        <div>{count}</div>
        </div>)
        
}
