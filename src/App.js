import "./App.css";

import { Routes, Route } from "react-router-dom";
// import Admin from "./routes/Admin";
// import User from "./routes/User";
// import Auth from "./routes/Auth";
import Login from "./pages/auth/Login";
// Admin Pages
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import HistoryAdmin from "./pages/admin/HistoryAdmin";
import ProfileAdmin from "./pages/admin/ProfileAdmin";
import ManageUsers from "./pages/admin/ManageUsers";
import Office from "./pages/admin/Office";

// User Pages
import DashboardUser from "./pages/user/DashboardUser";
import HistoryUser from "./pages/user/HistoryUser";
import ProfileUser from "./pages/user/ProfileUser";
import ClockIn from "./pages/user/ClockIn";
import ClockOut from "./pages/user/ClockOut";


function App() {
  return (
    
    <Routes>
      {/* <Auth />
      <Admin />
      <User /> */}

      {/* Auth Route */}
        <Route path="/login" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<DashboardAdmin />} />
        <Route path="/admin/history" element={<HistoryAdmin />} />
        <Route path="/admin/profile" element={<ProfileAdmin />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        <Route path="/admin/office" element={<Office />} />

        {/* User Routes */}
        <Route path="/user/dashboard" element={<DashboardUser />} />
        <Route path="/user/history" element={<HistoryUser />} />
        <Route path="/user/profile" element={<ProfileUser />} />
        <Route path="/user/clock-in" element={<ClockIn />} />
        <Route path="/user/clock-out" element={<ClockOut />} />
    </Routes>
  );
}

export default App;
