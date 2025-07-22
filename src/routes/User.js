import { Route, Routes } from "react-router-dom";
import DashboardUser from "../pages/user/DashboardUser";
import HistoryUser from "../pages/user/HistoryUser";
import ProfileUser from "../pages/user/ProfileUser";
import ClockIn from "../pages/user/ClockIn";
import ClockOut from "../pages/user/ClockOut";

const User = () => (
    <Routes>
        <Route path="/user/dashboard" element={<DashboardUser />} />
        <Route path="/user/history" element={<HistoryUser />} />
        <Route path="/user/profile" element={<ProfileUser />} />
        <Route path="/user/clock-in" element={<ClockIn />} />
        <Route path="/user/clock-out" element={<ClockOut />} />
    </Routes>
)

export default User;