import { useNavigate, useParams } from "react-router-dom";
import {
  Users,
  UserCheck,
  UserX,
  UserPlus,
  ArrowUpRight,
  Search,
  MoreHorizontal,
} from "lucide-react";
import "./AdminDashboard.css";

const sampleMembers = [
  {
    id: "IMA-1001",
    name: "Dr. Example One",
    city: "Hyderabad",
    branch: "Hyderabad",
    status: "Active",
  },
  {
    id: "IMA-1002",
    name: "Dr. Example Two",
    city: "Warangal",
    branch: "Warangal",
    status: "Active",
  },
  {
    id: "IMA-1003",
    name: "Dr. Example Three",
    city: "Karimnagar",
    branch: "Karimnagar",
    status: "Inactive",
  },
  {
    id: "IMA-1004",
    name: "Dr. Example Four",
    city: "Nizamabad",
    branch: "Nizamabad",
    status: "Active",
  },
];

const stats = [
  {
    title: "Total Members",
    value: "—",
    note: "Registered members",
    icon: Users,
    className: "blue",
  },
  {
    title: "Active Members",
    value: "—",
    note: "Currently active",
    icon: UserCheck,
    className: "green",
  },
  {
    title: "Inactive Members",
    value: "—",
    note: "Inactive records",
    icon: UserX,
    className: "orange",
  },
  {
    title: "Recently Added",
    value: "—",
    note: "Latest registrations",
    icon: UserPlus,
    className: "purple",
  },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { portal = "state-board" } = useParams();

  return (
    <div className="admin-dashboard">
      <div className="dashboard-heading">
        <div>
          <h1>Dashboard</h1>
          <p>Here’s an overview of your IMA Telangana administration.</p>
        </div>

        <button
          className="dashboard-primary-button"
          onClick={() => navigate(`/admin-members/${portal}/add`)}
        >
          <UserPlus size={18} />
          Add Member
        </button>
      </div>

      <div className="dashboard-stat-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div className="dashboard-stat-card" key={stat.title}>
              <div className={`dashboard-stat-icon ${stat.className}`}>
                <Icon size={22} />
              </div>

              <div className="dashboard-stat-content">
                <p>{stat.title}</p>
                <h2>{stat.value}</h2>
                <span>{stat.note}</span>
              </div>

              <ArrowUpRight className="dashboard-stat-arrow" size={18} />
            </div>
          );
        })}
      </div>

      <section className="dashboard-panel">
        <div className="dashboard-panel-heading">
          <div>
            <h2>Recent Members</h2>
            <p>Preview of the latest member records</p>
          </div>

          <button
            className="dashboard-secondary-button"
            onClick={() => navigate(`/admin-members/${portal}/view`)}
          >
            View All Members
            <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="dashboard-table-toolbar">
          <div className="dashboard-table-search">
            <Search size={17} />
            <span>Member directory preview</span>
          </div>
          <button className="dashboard-more-button" aria-label="More options">
            <MoreHorizontal size={21} />
          </button>
        </div>

        <div className="dashboard-table-scroll">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Member</th>
                <th>Membership No.</th>
                <th>City</th>
                <th>Branch</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {sampleMembers.map((member) => (
                <tr key={member.id}>
                  <td>
                    <div className="dashboard-member-cell">
                      <div className="dashboard-member-avatar">
                        {member.name.replace("Dr. ", "").charAt(0)}
                      </div>
                      <span>{member.name}</span>
                    </div>
                  </td>
                  <td>{member.id}</td>
                  <td>{member.city}</td>
                  <td>{member.branch}</td>
                  <td>
                    <span
                      className={`dashboard-status ${
                        member.status === "Active" ? "is-active" : "is-inactive"
                      }`}
                    >
                      {member.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="dashboard-row-action"
                      aria-label={`View ${member.name}`}
                      onClick={() => navigate(`/admin-members/${portal}/view`)}
                    >
                      <ArrowUpRight size={17} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="dashboard-table-footer">
          Showing sample records for layout preview
        </div>
      </section>
    </div>
  );
}
