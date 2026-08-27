import {useRef, useState} from "react";
import api from "../api/axios.ts";
import {useNavigate} from "react-router-dom";


function BoardCreate () {

    // navigate
    const navigate = useNavigate();

    // state
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    // ref
    const titleRef = useRef(null);


    const handleSubmit:  React.SubmitEventHandler<HTMLFormElement> =
        (event ) => {

        event.preventDefault();

        const data = {
            title: title,
            content: content
        }

        api.post("/api/boards", data)
            .then((response) => {
                console.log("응답: ", response);

                navigate("/boards");
            })
            .catch((error) => {
                console.log("에러 : ", error);
            })
    }

    return (
        <>
            <div >
                <h1 className={"tit_h1"}>게시판 작성</h1>
            </div>

            <div className={"main_content"}>
                <div className="content_wrap">
                    <div className="inner">

                        <form onSubmit={handleSubmit}>

                            <div className="inputArea">
                                <div>
                                    <label className={"tit"}>제목</label>
                                    <input
                                        type={"text"}
                                        name={"inputTitle"}
                                        id={"titleId"}
                                        value={title}
                                        ref={titleRef}
                                        onChange={(event : React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => setTitle(event.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className={"tit"}>내용</label>
                                    <textarea
                                        name={"inputContent"}
                                        value={content}
                                        onChange={(event : React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement> ) => setContent(event.target.value)}
                                    />
                                </div>
                            </div>

                            <div className={"form_opt mt20"}>
                                <button type={"submit"} className={"btn"}>저장</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default BoardCreate;