import { HashRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Home } from "../pages/Home/Home";
import { Downloads } from "../pages/Dowloads/Downloads";
import {Uploads} from "../pages/Uploads/Uploads";
import {Settings} from "../pages/Settings/Settings";

export const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/uploads" element={<Uploads />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </HashRouter>
  );
};
