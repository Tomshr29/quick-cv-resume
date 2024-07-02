/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from "@adonisjs/core/services/router";
import { middleware } from "./kernel.js";
const UpdatePostsController = () =>
  import("#controllers/update_posts_controller");

const DashboardController = () =>
  import("#controllers/auth/dashboard_controller");
const LoginController = () => import("#controllers/auth/login_controller");
const RegisterController = () =>
  import("#controllers/auth/register_controller");
const LogoutController = () => import("#controllers/auth/logout_controller");
const PostsController = () => import("#controllers/posts_controller");

router.get("/dashboard", [DashboardController, "index"]).as("dashboard.index");

router
  .group(() => {
    router.get("login", [LoginController, "show"]).as("auth.login");
    router.post("login", [LoginController, "store"]);

    router.get("register", [RegisterController, "show"]).as("auth.register");
    router.post("register", [RegisterController, "store"]);
  })
  .middleware([middleware.guest()]);

router
  .group(() => {
    router.delete("logout", [LogoutController, "handle"]).as("auth.logout");
  })
  .middleware([middleware.auth()]);

router.post("addResume", [PostsController, "create"]);
router.get("posts/:id/edit", [PostsController, "show"]);

router.get("/", async ({ inertia }) => {
  return inertia.render("home", { version: 5 });
});

router.put("updateResume/:id", [UpdatePostsController, "update"]);
