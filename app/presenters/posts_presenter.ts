import Post from "#models/post";
import { ModelPaginatorContract } from "@adonisjs/lucid/types/model";

export class PostsPresenter {
  toJSON(posts: ModelPaginatorContract<Post>) {
    return {
      meta: {},
      data: posts.all().map((post) => ({
        id: post.id,
        createdAt: post.createdAt.toISO()!,
        title: post.title,
        content: post.content,
        thumbnail: post.thumbnail,
        online: post.online,
      })),
    };
  }
}
