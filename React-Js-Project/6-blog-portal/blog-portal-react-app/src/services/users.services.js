import { apiService } from "../utils/api.service";
import { API_URLS } from "./apiUrls";

const register = (data) => {
  return apiService.post(API_URLS.REGISTER, data);
};

const addUserFormData = (data) => {
  return apiService.post(API_URLS.REGISTER, data, {
    headers: {
      "Content-Type": "multipart/formdata",
    },
  });
};

const updateUserFormData = (userId, data) => {
  return apiService.put(API_URLS.UPDATE_USER.replace(":userId", userId), data, {
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "multipart/formdata",
    },
  });
};

const login = (data) => {
  return apiService.post(API_URLS.LOGIN, data);
};

const getUsers = () => {
  return apiService.get(API_URLS.USERS);
};

const getUserById = (userId) => {
  return apiService.get(`${API_URLS.USERS}/${userId}`);
};

const deleteUserById = (userId) => {
  return apiService.delete(`${API_URLS.USERS}/${userId}`);
};

export const UserServices = {
  register,
  login,
  getUsers,
  deleteUserById,
  addUserFormData,
  getUserById,
  updateUserFormData,
};
