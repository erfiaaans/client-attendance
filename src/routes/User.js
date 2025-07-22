import { Route, Routes } from "react-router-dom";
import DashboardUser from "../components/user/DashboardUser";
import HistoryUser from "../components/user/HistoryUser";
import ProfileUser from "../components/user/ProfileUser";
import ClockIn from "../components/user/ClockIn";
import ClockOut from "../components/user/ClockOut";

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