import Navbar from "@/components/layouts/navbar";
import Sidebar from "@/components/layouts/sidebar";

const Page = () => {
  const progress = 60;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />

        <div className="flex flex-col w-full h-screen overflow-y-auto gap-4 p-4">
          <header className="flex items-center gap-4 w-full">
            <h1 className="text-3xl font-bold">
              Advanced Machine Learning Course
            </h1>
            <span className="badge badge-accent -mb-1">Accent</span>
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

          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
