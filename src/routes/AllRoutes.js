import { Routes, Route } from "react-router-dom";
import { HomePage, CreatePost, PageNotFound } from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";

export const AllRoutes = () => {
  return (
    <main>
        <Routes>
            <Route path="/" element={ <HomePage/> }></Route>
            <Route path="create" element={ <ProtectedRoute><CreatePost/></ProtectedRoute> }></Route>
            <Route path="*" element={ <PageNotFound/> }></Route>
        </Routes>
    </main>
  )
}
