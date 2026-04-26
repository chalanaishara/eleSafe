import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// ✅ Use your PC's local IP address (not localhost)
// Find it by running: ipconfig (Windows) or ifconfig (Mac/Linux)
const BASE_URL = "http://ip:8080"; // ← replace xxx with your IP

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Auto-attach token to every request
axiosInstance.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;