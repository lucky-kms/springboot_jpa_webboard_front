import { useNavigate } from "react-router-dom";
import api from "../api/axios";

interface HeaderProps {
    username: string | null;
    setUsername: (username: string | null) => void;
}

function Header({
                    username,
                    setUsername
                }: HeaderProps) {


    const navigate =  useNavigate();

    // 로그아웃
    const handleLogout: React.MouseEventHandler<HTMLAnchorElement> = async (event) => {


        event.preventDefault();

        try {

            await api.post("/api/logout");

            setUsername(null);

            alert("로그아웃 되었습니다.");

            navigate("/");

        } catch (error) {

            console.error(error);
        }
    };


    return (
        <header>

            <div className="top_area">
                <div className={"member_area"}>
            {
                username ? (


                        <div>
                             <span className={"member_name"}>
                                {username}님
                            </span>

                            <span> | </span>

                            <a href={"#"} className={"member_state"} onClick={(e) => {handleLogout(e)}} >
                                로그아웃
                            </a>
                        </div>


                ) : (
                    <button className={"btn btn_page"} onClick={() => navigate("/login")}>
                        로그인
                    </button>
                )

            }
                </div>
             </div>
        </header>
    );
}

export default Header;