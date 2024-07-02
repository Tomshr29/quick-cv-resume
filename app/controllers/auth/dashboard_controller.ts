import Post from "#models/post";
import type { HttpContext } from "@adonisjs/core/http";
import vine from "@vinejs/vine";

export default class DashboardController {
  static validator = vine.compile(
    vine.object({
      fullName: vine.string().trim(),
      email: vine.string().email().trim(),
    }),
  );

  async index({ auth, inertia, response }: HttpContext) {
    const authUser = auth.user!;

    if (!authUser) {
      return response.redirect().toPath("/login");
    }
    const posts = await Post.query()
      .where("user_id", authUser.id)
      .orderBy("created_at", "desc");
    return inertia.render("dashboard/index", { posts });
  }
}
