import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Conta from "../Pages/Conta";
import LoginCreate from "../Components/Login/LoginCreate";
import LoginPasswordLost from "../Components/Login/LoginPasswordLost";
import LoginPasswordReset from "../Components/Login/LoginPasswordReset";
import UserPhotoPost from "../Components/User/UserPhotoPost";
import UserStats from "../Components/User/UserStats";
import PrivateRoute from "./privateRoute";
import Photo from "../Components/Photo/Photo";
import UserProfile from "../Components/User/UserProfile";
import NotFound from "../Components/NotFound";

export function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/criar" element={<LoginCreate />} />
      <Route path="/login/perdeu" element={<LoginPasswordLost />} />
      <Route path="/login/resetar" element={<LoginPasswordReset />} />
      <Route
        path="/conta"
        element={
          <PrivateRoute>
            <Conta />
          </PrivateRoute>
        }
      />
      <Route path="/conta/postar" element={<UserPhotoPost />} />
      <Route path="/conta/estatisticas" element={<UserStats />} />
      <Route path="/foto/:id" element={<Photo />} />
      <Route path="/perfil/:user" element={<UserProfile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
