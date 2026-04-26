import axiosInstance from "./axiosInstance";
import AsyncStorage from "@react-native-async-storage/async-storage";

// ✅ Login
export const login = async (email: string, password: string) => {
  const response = await axiosInstance.post("/api/auth/login", {
    email,
    password,
  });
  // Save tokens
  await AsyncStorage.setItem("accessToken", response.data.accessToken);
  await AsyncStorage.setItem("refreshToken", response.data.refreshToken);
  return response.data;
};

// ✅ Register
export const register = async (formData: {
  nic: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  password: string;
  address: string;
  village: string;
  role: string;
  badgeNumber?: string;
  station?: string;
}) => {
  const response = await axiosInstance.post("/api/auth/register", formData);
  await AsyncStorage.setItem("accessToken", response.data.accessToken);
  await AsyncStorage.setItem("refreshToken", response.data.refreshToken);
  return response.data;
};

// ✅ Logout
export const logout = async () => {
  await AsyncStorage.removeItem("accessToken");
  await AsyncStorage.removeItem("refreshToken");
};

// ✅ Get my profile
export const getMyProfile = async () => {
  const response = await axiosInstance.get("/api/users/getMyProfile");
  return response.data;
};