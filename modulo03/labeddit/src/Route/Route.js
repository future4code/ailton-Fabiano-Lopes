import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feeds from "../pages/feedPages/feedPages";
import Login from "../pages/login/loginPage";
import Posts from "../pages/posts/postsPage";
import Register from "../pages/registerPage/registerPage";
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="feeds" element={<Feeds />} />
        <Route path="posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
};
