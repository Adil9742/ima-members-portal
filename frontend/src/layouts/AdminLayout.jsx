import { useState } from "react";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  UserRoundPen,
  ContactRound,
  Bell,
  LogOut,
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
  CircleUserRound,
} from "lucide-react";
import "./AdminLayout.css";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [membersOpen, setMembersOpen] = useState(true);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useNavigate();
  const { portal = "state-board" } = useParams();
  const username = sessionStorage.getItem("adminUsername") || "Administrator";

  const logout = () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    sessionStorage.removeItem("adminUsername");
    sessionStorage.removeItem("adminRole");
    sessionStorage.removeItem("adminPortal");
    navigate("/administration-login");
  };

  return (
    <div className="admin-layout">
      <header className="admin-topbar">
        <div className="admin-brand">
          <button
            className="admin-icon-button mobile-menu"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <X /> : <Menu />}
          </button>
          <div>
            <img
              className="brand-logo"
              src="https://www.imatelanganastate.org/Images/SB.jpg"
              alt="IMA Telangana State Branch Logo"
            />
          </div>

          <div className="admin-brand-text">
            <strong>IMA Telangana</strong>
            <span>Administration Portal</span>
          </div>
        </div>

        <div className="admin-topbar-actions">
          <div className="admin-dropdown-wrap">
            <button
              className="admin-icon-button notification-button"
              aria-label="Notifications"
              onClick={() => {
                setNotificationsOpen(!notificationsOpen);
                setProfileOpen(false);
              }}
            >
              <Bell size={21} />
              <span className="notification-dot" />
            </button>

            {notificationsOpen && (
              <div className="admin-dropdown notification-dropdown">
                <strong>Notifications</strong>
                <p>You’re all caught up.</p>
              </div>
            )}
          </div>

          <div className="admin-dropdown-wrap">
            <button
              className="admin-profile-button"
              onClick={() => {
                setProfileOpen(!profileOpen);
                setNotificationsOpen(false);
              }}
            >
              <span className="admin-avatar">
                <CircleUserRound size={25} />
              </span>
              <span className="admin-profile-name">{username}</span>
              <ChevronDown size={16} />
            </button>

            {profileOpen && (
              <div className="admin-dropdown profile-dropdown">
                <strong>{username}</strong>
                <span>Administrator</span>
                <button onClick={logout}>
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>

          <button className="admin-logout-button" onClick={logout}>
            <LogOut size={17} />
            <span>Logout</span>
          </button>
        </div>
      </header>

      <div className="admin-body">
        {sidebarOpen && (
          <button
            className="admin-sidebar-overlay"
            aria-label="Close sidebar"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <aside className={`admin-sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
          <div className="admin-sidebar-heading">MAIN MENU</div>

          <NavLink
            to={`/admin-dashboard/${portal}`}
            end
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `admin-nav-link ${isActive ? "active" : ""}`
            }
          >
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </NavLink>

          <button
            className={`admin-nav-link admin-members-toggle ${
              membersOpen ? "expanded" : ""
            }`}
            onClick={() => setMembersOpen(!membersOpen)}
          >
            <Users size={19} />
            <span>Members</span>
            <ChevronDown
              size={16}
              className={`admin-chevron ${membersOpen ? "rotated" : ""}`}
            />
          </button>

          {membersOpen && (
            <div className="admin-submenu">
              <NavLink
                to={`/admin-members/${portal}/add`}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `admin-subnav-link ${isActive ? "active" : ""}`
                }
              >
                <UserPlus size={17} />
                Add Member
              </NavLink>

              <NavLink
                to={`/admin-members/${portal}/edit`}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `admin-subnav-link ${isActive ? "active" : ""}`
                }
              >
                <UserRoundPen size={17} />
                Edit Member
              </NavLink>

              <NavLink
                to={`/admin-members/${portal}/view`}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `admin-subnav-link ${isActive ? "active" : ""}`
                }
              >
                <ContactRound size={17} />
                View Members
              </NavLink>
            </div>
          )}

          <div className="admin-sidebar-footer">
            <ShieldCheck size={17} />
            <span>Secure Admin Portal</span>
          </div>
        </aside>

        <main className="admin-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
