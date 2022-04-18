import Link from "next/link";
import styles from "common/style/Nav.module.css"

export default function Nav(){
    return(
        <nav className={styles.nav}>
        <ul>
        <li className={styles.li}><Link href='/'>메인</Link></li>
        <li className={styles.li}><Link href='/admin/dashboard'>대쉬보드</Link></li>
        <li className={styles.li}><Link href='/basic/calc'>계산기</Link></li>
        <li className={styles.li}><Link href='/basic/counter'>카운터</Link></li>
        <li className={styles.li}><Link href='/basic/bmi'>BMI</Link></li>
        <li className={styles.li}><Link href='/game/addTeam/'>팀등록</Link></li>
        <li className={styles.li}><Link href='/game/getTeam/'>팀목록</Link></li>
        <li className={styles.li}><Link href='/game/modifyTeam/'>팀수정</Link></li>
        <li className={styles.li}><Link href='/game/removeTeam/'>팀삭제</Link></li>
        <li className={styles.li}><Link href='/game/addGame/'>게임등록</Link></li>
        <li className={styles.li}><Link href='/game/getGame/'>게임목록</Link></li>
        <li className={styles.li}><Link href='/game/modifyGame/'>게임수정</Link></li>
        <li className={styles.li}><Link href='/game/removeGame/'>게임삭제</Link></li>
        <li className={styles.li}><Link href='/todo/addTodo/'>투두등록</Link></li>
        <li className={styles.li}><Link href='/todo/getTodo/'>투두목록</Link></li>
        <li className={styles.li}><Link href='/todo/removeTodo/'>투두수정</Link></li>
        <li className={styles.li}><Link href='/todo/addTodo/'>투두삭제</Link></li>
        <li className={styles.li}><Link href='/board/addArticle/'>게시글등록</Link></li>
        <li className={styles.li}><Link href='/board/getArticles/'>게시글목록</Link></li>
        <li className={styles.li}><Link href='/board/modifyArticle/'>게시글수정</Link></li>
        <li className={styles.li}><Link href='/board/removeArticle/'>게시글삭제</Link></li>
        <li className={styles.li}><Link href='/user/join'>회원가입</Link></li>
        <li className={styles.li}><Link href='/user/login'>로그인</Link></li>
        <li className={styles.li}><Link href='/user/logout'>로그아웃</Link></li>
        <li className={styles.li}><Link href='/user/getUsers'>사용자목록</Link></li>
        <li className={styles.li}><Link href='/user/updateUser'>사용자수정</Link></li>
        <li className={styles.li}><Link href='/user/withdrawUser'>회원탈퇴</Link></li>
       
        </ul>
        </nav>
    );
}