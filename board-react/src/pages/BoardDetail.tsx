import { useEffect, useState } from "react";
import api from "../api/axios.ts";
import type { Board } from "../type/PageResponse.ts";
import {useParams, Link, useNavigate,} from "react-router-dom";


function BoardDetail() {
    const { id } = useParams<{ id : string}>();

    const navigate =  useNavigate();

    const [board, setBoard] = useState<Board | null>(null);

    useEffect(() => {

        api.get<Board>(`/api/boards/${id}`)
        .then((response) => {
            setBoard(response.data);
        })
            .catch ((error) => {
                console.log("상세 조회 실패 : ", error);
            })
    }, [id]);


    const handleDelete:  React.MouseEventHandler<HTMLButtonElement> =
        (event) => {

        event.preventDefault();

        if(!id) {
            return;
        }

        const result = window.confirm("정말 삭제하시겠습니까?");

        if(!result) {
            return;
        }

        api.delete(`/api/boards/${id}`)
            .then(() => {
                console.log("삭제 성공 : ");

                navigate(`/boards`);
            })
            .catch((error) => {
                console.log("삭제 실패 에러: ", error);
            })
    }

    if(!board) {
        return <div>게시글을 불러오는중입니다...</div>;
    }

    return (
        <>
            <div >
                <h1 className={"tit_h1"}>게시판 상세</h1>
            </div>

            <div className={"main_content"}>
                <div className="content_wrap">
                    <div className="inner">
                        <div className="inputArea">
                            <div>
                                <span className="tit">번호 </span>
                                <span>{board?.id}</span>
                            </div>
                            <div>
                                <span className="tit">제목 </span>
                                <span>{board?.title}</span>
                            </div>
                            <div>
                                <span className="tit">내용 </span>
                                <span>{board?.content}</span>
                            </div>
                            <div>
                                <span className="tit">작성자 </span>
                                <span>{board?.writer}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="opt_btm">
                    <Link to={"/boards"}><span className={"btn btn_page"}>목록으로</span></Link>
                    <Link to={`/boards/${board?.id}/edit`}><span className={"btn btn_page"}>수정</span></Link>
                    <button onClick={ handleDelete } className={"btn btn_form"}>삭제</button>
                </div>
        </div>
    </>
    );

    }

    export default BoardDetail;