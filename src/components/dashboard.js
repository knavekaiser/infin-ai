import React, { useState } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { BsChevronRight } from "react-icons/bs";
import Voucher from "./voucher";
import OtherPages from "./otherPages";
import Masters from "./masters/index";
import Reports from "./reports";
import s from "./dashboard.module.scss";

const Accordion = ({ label, basePath, items, className }) => {
  const location = useLocation();
  return (
    <li
      className={`${s.accordion} ${
        location.pathname.startsWith(basePath) ? s.open : ""
      } ${className || ""}`}
    >
      <Link className={s.accordionLabel} to={`${basePath}/${items[0]?.path}`}>
        {label} <BsChevronRight />
      </Link>
      {location.pathname.startsWith(basePath) && (
        <ul className={s.submenu}>
          {items.map((item) => (
            <li
              key={item.path}
              className={`${
                location.pathname.startsWith(basePath + "/" + item.path)
                  ? s.active
                  : ""
              }`}
            >
              <Link to={`${basePath}/${item.path}`}>{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

function Dashboard() {
  const location = useLocation();
  const [collaped, setCollapsed] = useState(false);
  return (
    <div className={s.container}>
      <div className={`${s.sidebar} ${collaped ? s.collaped : ""}`}>
        <button
          className={`clear ${s.collapseBtn}`}
          onClick={() => setCollapsed(!collaped)}
        >
          <BiChevronLeft />
        </button>
        <ul className={s.links}>
          <li
            className={`${s.sidebarItem} ${
              location.pathname === "/vouchers" ? s.active : ""
            }`}
          >
            <Link to="/vouchers">Voucher</Link>
          </li>
          {
            //   <li
            //   className={`${s.sidebarItem} ${
            //     location.pathname === "/incident-dashboard" ? s.active : ""
            //   }`}
            // >
            //   <Link to="/incident-dashboard">Incident Dashboard</Link>
            // </li>
          }
          <li
            className={`${s.sidebarItem} ${
              location.pathname === "/reports" ? s.active : ""
            }`}
          >
            <Link to="/reports">Reports</Link>
          </li>
          <Accordion
            label="Masters"
            basePath="/masters"
            className={`${s.sidebarItem} ${
              location.pathname.startsWith("/masters") ? s.active : ""
            }`}
            items={[
              { label: <>Clients</>, path: "clients" },
              { label: <>Users</>, path: "users" },
              {
                label: <>Category & Sub Category</>,
                path: "categoryAndSubCategory",
              },
              { label: <>Accounts</>, path: "accounts" },
              { label: <>Two Field Master</>, path: "twoFieldMaster" },
            ]}
          />
        </ul>
      </div>
      <main>
        <Routes>
          <Route path="/vouchers" element={<Voucher />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/masters/*" index element={<Masters />} />
          <Route path="/:other" element={<OtherPages />} />
          <Route path="/*" element={<Voucher />} />
        </Routes>
      </main>
    </div>
  );
}

export default Dashboard;
