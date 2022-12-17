export default {
  getBlogs: (): string => '/posts',
  getComments: (id: number): string => `/posts/${id}/comments`,
};
