
import BoardList from "./pages/BoardList.tsx";
import BoardDetail from "./pages/BoardDetail.tsx";
import BoardCreate from "./pages/BoardCreate.tsx";
import BoardEdit from "./pages/BoardEdit.tsx";

import "./assets/css/common.css";
import "./assets/css/List.module.css";
import {Navigate, Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
      <div className={"wrap"}>
          <Routes>
              <Route path={"/boards"} element={<BoardList />} />
              <Route path={"/boards/:id"} element={<BoardDetail />} />
              <Route path={"/boards/new"} element={<BoardCreate />} />
              <Route path={"/boards/:id/edit"} element={<BoardEdit />} />
              <Route path={"*"} element={<Navigate to={"/boards"} />} />
          </Routes>
      </div>
    </>
  )
}

export default App
