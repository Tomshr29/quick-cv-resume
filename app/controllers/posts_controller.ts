import Post from "#models/post";
import type { HttpContext } from "@adonisjs/core/http";
import vine from "@vinejs/vine";

export default class AddresuemsController {
  static validator = vine.compile(
    vine.object({
      title: vine.string().trim(),
    }),
  );

  static updateValidator = vine.compile(
    vine.object({
      firstName: vine.string(),
      lastName: vine.string(),
      jobTitle: vine.string(),
      address: vine.string(),
      email: vine.string(),
      phone: vine.string(),
    }),
  );

  async create({ request, response, auth }: HttpContext) {
    const data = request.only(["title"]);

    await Post.create({
      ...data,
      userId: auth.user?.id,
    });

    return response.redirect().toPath("/dashboard");
  }

  async show({ auth, inertia, params, response }: HttpContext) {
    const authUser = auth.user!;
    const postId = params.id;

    try {
      const post = await Post.query()
        .where("user_id", authUser.id)
        .where("id", postId)
        .firstOrFail();
      if (!post) {
        response.redirect().toPath("/dashboard");
      }
      return inertia.render("dashboard/show", { post });
    } catch (error) {
      console.error("Erreur lors de la récupération du post:", error);
      response.redirect().toPath("/dashboard");
    }
  }
}
