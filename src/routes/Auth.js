import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";

const Auth = () => (
    <Routes>
        <Route path="/login" element={<Login />} />
    </Routes>
);

export default Auth;