import Link from "next/link";
import { List, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

const Navbar = () => {
  const user = true;

  return (
    <>
      <nav className="navbar justify-between w-full">
        <div className="flex-none">
          <button
            type="button"
            className="btn btn-square btn-ghost"
            title="Menu"
          >
            <List size={24} />
          </button>
        </div>

        {/* Menu for mobile */}
        <div className="dropdown dropdown-end sm:hidden">
          <button type="button" className="btn btn-ghost" title="Menu">
            <List size={24} />
          </button>

          <ul
            tabIndex={0}
            className="dropdown-content menu z-[1] bg-base-200 p-4 rounded-box shadow w-56 gap-2"
          >
            <li>
              <Link href="/">About</Link>
            </li>
            <Link className="btn btn-sm btn-primary" href="/">
              Log in
            </Link>
          </ul>
        </div>

        {/* Menu for desktop */}
        <ul className="hidden menu sm:menu-horizontal gap-6 items-center">
          <li>
            <Link href="/" target="_blank" className="btn btn-ghost btn-circle">
              <WhatsappLogo
                size={32}
                weight="duotone"
                className="text-green-700"
              />
            </Link>
          </li>
          <li>
            <Link href="/badges" className="btn btn-accent btn-sm px-6">
              {Math.ceil(Math.random() * 10)} Badges Earned
            </Link>
          </li>

          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" title="Profile">
                <div className="avatar avatar-placeholder">
                  <div className="w-8 bg-primary rounded-full">
                    <span className="text-lg text-primary-content">A</span>
                  </div>
                </div>
              </div>

              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
              >
                <li>
                  <a>Progress Tracker</a>
                </li>
                <li>
                  <a>Keyboard shortcut</a>
                </li>
                <div className="divider my-0"></div>
                <li>
                  <a>Company profile</a>
                </li>
                <li>
                  <a>Team</a>
                </li>
                <li>
                  <a>Profile</a>
                </li>
                <div className="divider my-0"></div>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Log out</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link href="/login" className="btn btn-sm btn-primary">
              Log in
            </Link>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
