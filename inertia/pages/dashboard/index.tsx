import type { InferPageProps } from "@adonisjs/inertia/types";
import DashboardController from "#controllers/auth/dashboard_controller";
import AddResume from "~/components/AddResume";
import { Notebook } from "lucide-react";
import { Link } from "@inertiajs/react";

function Dashboard(props: InferPageProps<DashboardController, "index">) {
  const { posts } = props;
  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="text-3xl font-bold">My Resume</h2>
      <p>Start Creating AI resume to your next Job role</p>
      <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
        <AddResume />
        {posts.map((post) => (
          <Link href={`/posts/${post.id}/edit`} key={post.id}>
            <div className="flex h-[280px] items-center justify-center rounded-lg border border-blue-300 bg-gray-50 p-14 shadow-blue-300 transition-all hover:scale-105 hover:shadow-md">
              <Notebook />
            </div>
            <h2 className="my-1 text-center">{post.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
