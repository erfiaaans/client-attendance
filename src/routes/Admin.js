import { Route, Routes } from "react-router-dom";
import DashboardAdmin from "../pages/admin/DashboardAdmin";
import HistoryAdmin from "../pages/admin/HistoryAdmin";
import ProfileAdmin from "../pages/admin/ProfileAdmin";
import ManageUsers from "../pages/admin/ManageUsers";
import Office from "../pages/admin/Office";

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
