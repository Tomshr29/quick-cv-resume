import Post from '#models/post'

export class PostPresenter {
  toJSON(post: Post) {
    return {
      id: post.id,
      title: post.title,
      content: post.content,
      url: post.url,
      timeAgo: post.createdAt.toRelative({ locale: 'en' }),
      user: {
        id: post.user.id,
        name: post.user.fullName,
      },
    }
  }
}
