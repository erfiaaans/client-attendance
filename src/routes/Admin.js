import { Route, Routes } from "react-router-dom";
import DashboardAdmin from "../components/admin/DashboardAdmin";
import HistoryAdmin from "../components/admin/HistoryAdmin";
import ProfileAdmin from "../components/admin/ProfileAdmin";
import ManageUsers from "../components/admin/ManageUsers";
import Office from "../components/admin/Office";

const Admin = () => (
    <Routes>
        <Route path="/admin/dashboard" element={<DashboardAdmin />} />
        <Route path="/admin/history" element={<HistoryAdmin />} />
        <Route path="/admin/profile" element={<ProfileAdmin />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        <Route path="/admin/office" element={<Office />} />
    </Routes>
)

export default Admin;
