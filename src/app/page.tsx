import Navbar from "@/components/layouts/navbar";
import Sidebar from "@/components/layouts/sidebar";
import content from "@/app/content.json";
import leaderboard from "@/app/leaderboard.json";
import Link from "next/link";
import { LockSimple, Target } from "@phosphor-icons/react/dist/ssr";

const Page = () => {
  const progress = 60;
  const modules = content.modules;
  const students = leaderboard.leaderboard;

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
            <span className="badge badge-accent text-primary -mb-1 border-primary border">
              LIVE
            </span>
          </header>

          <div className="flex gap-4">
            <div className="flex-1">
              <div className="card bg-base-300 outline-1 outline-base-300 shadow-sm h-24">
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

              <div>
                {modules.map((module) => (
                  <div key={module.name} className="my-4">
                    <div className="card bg-base-200">
                      <div className="card-body">
                        <h3 className="card-title flex justify-between">
                          <span>{module.name}</span>
                          <span>
                            {module.locked ? (
                              <LockSimple
                                size={24}
                                weight="fill"
                                className="text-accent-content"
                              />
                            ) : (
                              <span className="inline-flex gap-4 text-sm">
                                <span className="inline-flex flex-col items-center text-primary">
                                  <span>MCQs</span>{" "}
                                  {Math.floor(Math.random() * 10)}
                                </span>
                                <span className="inline-flex flex-col items-center text-primary">
                                  <span>Assignments</span>
                                  {Math.floor(Math.random() * 10)}
                                </span>
                              </span>
                            )}
                          </span>
                        </h3>
                      </div>
                      <div className="card-actions flex-col p-4 pt-0">
                        {[module.activities[0]].map((submodule) => (
                          <button
                            type="button"
                            key={submodule.title}
                            className="btn btn-accent bg-gradient-to-r from-neutral to-white w-full"
                          >
                            <Target size={32} weight="duotone" />

                            <Link href="/" className="text-left mr-auto">
                              {submodule.title}
                            </Link>

                            <div>
                              {module.locked ? (
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

            <div className="hidden xl:block w-80">
              <div className="card bg-gradient-to-l from-primary outline-1 outline-base-300 shadow-sm h-24">
                <div className="card-body h-24">
                  <h2 className="card-title flex items-center justify-between text-sm h-24">
                    <span>10 Weeks</span>
                    <span>Incomplete</span>
                  </h2>
                </div>
              </div>

              <div className="">
                <div className="bg-accent text-center text-primary font-bold text-lg pt-2 mt-2 p-0.5 rounded-box">
                  LEADERBOARD
                  <div className="overflow-x-auto bg-white rounded-box">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          <th>Rank</th>
                          <th>Name</th>
                          <th>Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* row 1 */}
                        {students.map((student, index) => (
                          <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{student.name}</td>
                            <td>{student.score}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
