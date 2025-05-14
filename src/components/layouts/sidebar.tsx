import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="h-screen sticky top-0 overflow-y-auto space-y-4 w-72 py-6 px-4 bg-base-200">
      <Link href="/" className="btn btn-ghost">
        <img alt="Logo" src="/brand/logo.png" className="w-6" />
        Daisy UI
      </Link>

      <ul className="menu p-0">
        <li>
          <Link href="/" className="menu-i active">
            <i className="fa-solid fa-house fa-fw"></i>
            Home
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <i className="fa-solid fa-chart-line fa-fw"></i>
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <i className="fa-solid fa-bars-progress fa-fw"></i>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/tasks">
            <i className="fa-solid fa-list fa-fw"></i>
            Tasks
          </Link>
        </li>
        <li>
          <Link href="/reporting">
            <i className="fa-solid fa-chart-pie fa-fw"></i>
            Reporting
          </Link>
        </li>
        <li>
          <Link href="/users">
            <i className="fa-solid fa-users fa-fw"></i>
            Users
          </Link>
        </li>
      </ul>

      <div className="divider"></div>

      <div className="flex justify-between items-center p-2 mt-auto">
        <div className="flex flex-col bg-accent w-full rounded-lg p-2">
          <div className="flex flex-col text-start">
            <span className="font-bold">User name</span>
            <span className="text-sm text-accent">user@email.com</span>
          </div>
          <a className="btn btn-error btn-sm" title="Logout">
            <i className="fa-solid fa-door-open"></i>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
