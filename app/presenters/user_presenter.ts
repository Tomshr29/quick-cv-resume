import type Post from '#models/post'
import type User from '#models/user'

export class UserPresenter {
  toJSON(user: User, posts: Post[]) {
    return {
      id: user.id,
      name: user.fullName,
      email: user.email,
      posts: posts.map((post) => ({
        id: post.id,
        title: post.title,
        content: post.content,
        url: post.url,
        timeAgo: post.createdAt.toRelative({ locale: 'en' }),
      })),
    }
  }
}
