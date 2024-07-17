import { apiService } from "../utils/api.service";
import { API_URLS } from "./apiUrls";

const storeComment = (data = {}) =>
  apiService.post(API_URLS.STORE_COMMENT, data);

const getAllComments = () => apiService.get(API_URLS.COMMENTS);

const deleteCommentById = (commentId) =>
  apiService.delete(`${API_URLS.COMMENTS}/${commentId}`);

const approveCommentById = (commentId) =>
  apiService.get(`${API_URLS.COMMENTS}/approve/${commentId}`);

const unapproveCommentById = (commentId) =>
  apiService.get(`${API_URLS.COMMENTS}/unapprove/${commentId}`);

export const commentService = {
  storeComment,
  getAllComments,
  deleteCommentById,
  approveCommentById,
  unapproveCommentById,
};
