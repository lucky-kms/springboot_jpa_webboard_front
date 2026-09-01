import {useEffect, useState} from "react";

import BoardList from "./pages/BoardList.tsx";
import BoardDetail from "./pages/BoardDetail.tsx";
import BoardCreate from "./pages/BoardCreate.tsx";
import BoardEdit from "./pages/BoardEdit.tsx";
// member
import Login from "./pages/Login.tsx";

import api from "./api/axios.ts"

import "./assets/css/common.css";
import "./assets/css/List.module.css";
import {Navigate, Route, Routes} from "react-router-dom";
import Header from "./components/Header.tsx";


function App() {

    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {

        const checkLogin = async () => {

            try {

                const response = await api.get("/api/me");

                setUsername(response.data.username);

                console.log(response.data.username);

            } catch {

                setUsername(null);
            }
        };

        checkLogin();

    }, []);

  return (
    <>

      <div className={"wrap"}>
              <Header username={username} setUsername={setUsername} />

              <Routes>
                  <Route path={"/boards"} element={<BoardList />} />
                  <Route path={"/boards/:id"} element={<BoardDetail />} />
                  <Route path={"/boards/new"} element={<BoardCreate />} />
                  <Route path={"/boards/:id/edit"} element={<BoardEdit />} />
                  <Route path={"*"} element={<Navigate to={"/boards"} />} />

                  <Route path={"/login"} element={<Login />} />
              </Routes>
      </div>
    </>
  )
}

export default App
