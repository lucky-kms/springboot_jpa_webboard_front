import { useState } from "react";
import api from "../api/axios";
import {useNavigate} from "react-router-dom";
import styleLogin from "../assets/css/Login.module.css";


function Login () {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const HandleLogin:  React.SubmitEventHandler<HTMLFormElement> =  async (eventee) => {

        eventee.preventDefault();

        try {
            const response = await api.post("api/login", {
                username,
                password}
            );

            console.log("성공", response.data);

            navigate("/");
        }
        catch (error) {
            console.log("error : 에러입니다", error);
        }

    }

    return (
        <>

            <h1 className={"tit_h1"}>로그인</h1>

            <form onSubmit={HandleLogin}>
                <div className={styleLogin.login_form}>
                    <div className={"inputArea"}>
                        <div>
                            <span>아이디: </span>
                            <input name={"username"}
                                   value={username}
                                   onChange={e => setUsername(e.target.value)}/>
                        </div>

                        <div>
                            <span>비밀번호: </span>
                            <input name={"password"}
                                   value={password}
                                   onChange={e => setPassword(e.target.value)}/>
                        </div>
                    </div>

                    <div className={"form_opt mt20"}>
                        <button type={"submit"} className={"btn btn_form"}>로그인</button>
                    </div>
                </div>
            </form>
        </>
)
}

export default Login;