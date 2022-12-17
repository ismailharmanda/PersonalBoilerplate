import { apiRequest } from 'config';
import endpoints from 'services/endpoints';

export const getAllBlogs = () => apiRequest.get(endpoints.getBlogs());
export const getSelectedPostComments = (id: number) => apiRequest.get(endpoints.getComments(id));
export const loginService = () => apiRequest.get(endpoints.login());
