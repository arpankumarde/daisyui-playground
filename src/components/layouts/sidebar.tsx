import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="h-screen sticky top-0 flex flex-col overflow-y-auto space-y-4 w-72 bg-primary">
      <Link href="/" className="m-4">
        <Image
          alt="Logo"
          src="https://placehold.co/1600x300/EEEEEE/31343C/png"
          width={800}
          height={150}
        />
      </Link>

      <ul className="menu menu-lg w-full px-4 grow">
        <li>
          <Link href="/" className="menu-active">
            Home
          </Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/tasks">Tasks</Link>
        </li>
        <li>
          <Link href="/reporting">Reporting</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>

      <div className="flex flex-col gap-4 mt-auto bg-accent/50 p-4">
        <div>
          <h3 className="card-title">Overdue Tasks</h3>
          <p className="text-sm">
            2 Overdue Assignments
            <br /> 1 missed quiz
          </p>
        </div>

        <Link
          href="/tasks/checkout"
          className="btn btn-accent"
          title="Checkout"
        >
          Checkout
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
