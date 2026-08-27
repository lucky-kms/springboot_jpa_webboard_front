import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import type {Board} from "../type/PageResponse.ts";
import api from "../api/axios.ts";

function BoardEdit() {
    const { id } = useParams<{ id: string }>() ;

    const navigator =  useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [writer, setWriter] = useState("");


    useEffect(() => {

        if(!id) {
            return;
        }

        api.get<Board>(`/api/boards/${id}`)
            .then((response) => {
                console.log("응답 수정",);

                const board = response.data;

                setTitle(board.title);
                setContent(board.content);
                setWriter(board.writer);

            })
            .catch((error) => {
                console.log("게시글 조회 실패 : ", error);
            });
    }, [id]);

    const handleSubmit : React.SubmitEventHandler<HTMLFormElement> =
        (event) => {

        event.preventDefault();

        const data = {
            id,
            title,
            content,
            writer,
        }

        if(!id){
            return;
        }

        api.put(`/api/boards/${id}`, data)
            .then((response) => {
                console.log("접속 : ", response.data);

                navigator(`/boards/${id}`);
            })
            .catch((error) => {
                console.log("에러:", error);
            })
    }

    return (
        <>
            <div>
                <h1 className={"tit_h1"}>게시판 수정</h1>
            </div>

            <div className={"main_content"}>
                <div className="content_wrap">
                    <div className="inner">
                        <form onSubmit={handleSubmit} >
                            <input type={"hidden"} name={"writer"} value={writer}
                                   onChange={(event) => setWriter(event.target.value)} />

                            <div className="inputArea">
                                <div>
                                    <label className={"tit"}>제목</label>
                                    <input type={"text"} name={"title"} value={title}
                                           onChange={(event) => setTitle(event.target.value)} />
                                </div>
                                <div>
                                    <label className={"tit"}>내용</label>
                                    <textarea  name={"content"} value={content}
                                           onChange={(event) => setContent(event.target.value)} />

                                </div>

                            </div>

                            <div className={"form_opt mt20"} >
                                <button type={"submit"} className={"btn"}>저장</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoardEdit;