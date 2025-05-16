import Navbar from "@/components/layouts/navbar";
import Sidebar from "@/components/layouts/sidebar";
import { groups } from "@/app/content.json";
import Link from "next/link";
import { LockSimple } from "@phosphor-icons/react/dist/ssr";

const Page = () => {
  const progress = 60;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />

        <div className="flex flex-col w-full overflow-y-auto gap-4 p-4">
          <header className="flex items-center gap-4 w-full">
            <h1 className="text-3xl font-bold">
              Advanced Machine Learning Course
            </h1>
            <span className="badge badge-accent text-primary -mb-1">LIVE</span>
          </header>

          <div className="card bg-base-300 outline-1 outline-base-300 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{progress}% Complete</h2>
              <progress
                className="progress progress-primary"
                value={progress}
                max="100"
              ></progress>
            </div>
          </div>

          <div className="divider my-0"></div>

          <div className="">
            {groups.map((group) => (
              <div key={group.name} className="my-4">
                <div className="card bg-base-200">
                  <div className="card-body">
                    <h3 className="card-title flex justify-between">
                      <span>{group.name}</span>
                      <span>
                        {group.locked ? (
                          <LockSimple
                            size={24}
                            weight="fill"
                            className="text-accent-content"
                          />
                        ) : null}
                      </span>
                    </h3>
                  </div>
                  <div className="card-actions flex-col p-4">
                    {group.items.map((item) => (
                      <button
                        type="button"
                        key={item.title}
                        className="btn btn-accent bg-accent/50 w-full"
                      >
                        <Link href="/" className="text-left mr-auto">
                          {item.title}
                        </Link>

                        <div>
                          {group.locked ? (
                            <LockSimple
                              size={24}
                              weight="fill"
                              className="text-accent-content"
                            />
                          ) : null}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
