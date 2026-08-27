import { useEffect, useState } from "react";
import api  from "../api/axios";
import { Link } from "react-router-dom";
import type {Board} from "../type/PageResponse.ts";
import type {PageResponse} from "../type/PageResponse.ts";

function BoardList () {

    const [boards, setBoards] = useState<Board[]>([]);

    // console.log("react: ", boards);

    useEffect(() => {
        api.get<PageResponse<Board>>("/api/boards")
            .then((response) => {
                console.log("API응답:", response.data);

                setBoards(response.data.content);
            })
            .catch((error) => {
                console.log("API 호출 실패:", error);
            })
    }, []);

    return (
        <>
            <div >
                <h1 className={"tit_h1"}>게시판</h1>
            </div>


            <div className={"main_content"}>
                <div className={"inner"}>
                    <table className={"tbl"}>
                        <thead>
                        <tr>
                            <th>순서</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>조회수</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            boards.map((board) => (
                                <tr key={board.id}>
                                    <td>{board.id}</td>
                                    <td className={"td_tit"}>
                                        <span className={"strong"}>
                                            <Link to={`/boards/${board.id}`}>
                                                {board.title}
                                            </Link>
                                        </span>
                                    </td>
                                    <td>{board.writer}</td>
                                    <td>{board.viewCount}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>

                <div className={"opt_btm mt20"}>
                    <Link to={"/boards/new"} ><span className={"btn btn_page"}>글쓰기</span></Link>
                </div>
            </div>
        </>
    )
}

export default BoardList;