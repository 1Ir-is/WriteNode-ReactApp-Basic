import { Routes, Route } from "react-router-dom";
import { HomePage, CreatePost, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <main>
        <Routes>
            <Route path="/" element={ <HomePage/> }></Route>
            <Route path="create" element={ <CreatePost/> }></Route>
            <Route path="*" element={ <PageNotFound/> }></Route>
        </Routes>
    </main>
  )
}
