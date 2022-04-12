import React,{useState} from "react"
import style from "board/style/board-form.module.css"
import axios from "axios"
export default function BoardForm(){
    const [inputs, setInputs] = useState({})
    const handleChange = e => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({...inputs, [name]: value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        alert( `등록할 게시글 :  ${ JSON.stringify(inputs) }` )
        axios.post("http://localhost:5000/api/board/write", inputs)
        .then(res => {
            alert(`결과: ${res.data.result}`)
        })
        .catch(err => alert(err))
    }
    return (<>
        <form action="" onSubmit={handleSubmit}>
        <h1>게시글 등록</h1>
        <div className={style.container}>
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="passengerId">게시글 작성자 ID</label>
                </div>
                <div className={style.col75}>
                <input type="text" onChange={handleChange} className={style.inputText}
                id="passengerId" name="passengerId" placeholder="게시글 작성자 ID 입력"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="name">게시글 작성자 이름</label>
                </div>
                <div className={style.col75}>
                <input type="text" onChange={handleChange} className={style.inputText}
                id="name" name="name" placeholder="게시글 작성자 이름 입력"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="team">응원팀</label>
                </div>
                <div className={style.col75}>
                <select id="teamId" name="teamId" onChange={handleChange}>
                    <option value="">응원팀 선택</option>
                    <option value="K09">FC 서울</option>
                    <option value="K02">수원 삼성블루윙즈</option>
                    <option value="K04">인천 유나이티드</option>
                </select>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="subject">게시글 내용</label>
                </div>
                <div className={style.col75}>
                <input type="textarea" onChange={handleChange}  id="subject" name="subject" style={{height:200 + "px"}}></input>
                </div>
            </div>
            <br/>
            <div className={style.row}>
                <input type="submit" className={style.inputSubmit}
                value="Submit"/>
            </div>
            </div>
        </form>
    </>)
}