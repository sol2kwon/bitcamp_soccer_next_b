import React,{useState} from "react"
import style from "board/style/board-form.module.css"
import { useDispatch } from "react-redux"
import { addBoard } from "../../redux/reducers/board.reducer"
export default function Board(){
    const dispatch = useDispatch()
    const [inputs,setInputs] = useState({})

    const handleChange = e => {
        const {name,value} = e.target
        setInputs({...inputs,[name]:value})
    }

    return (<>
        <h1>게시글 등록</h1>
        <form onSubmit= {e=>{
            e.preventDefault()
            if(inputs) dispatch(addBoard(inputs))
        }}>
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="passengerId">글 제목</label>
                </div>
                <div className={style.col75}>
                <input type="text" onChange={handleChange} className={style.inputText}
                id="title" name="title" placeholder="글 제목 입력"/>
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
        </form>
        </>)}
