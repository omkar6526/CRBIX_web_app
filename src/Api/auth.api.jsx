import api from "./api";

// REGISTER
export const registerUser = async (data) => {
  try {
    const res = await api.post("/api/auth/register", {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      mobile: data.phoneNo,      // ✅ backend expects "mobile"
      password: data.password,
      cpassword: data.cPass,     // ✅ backend expects "cpassword"
    });

    return res.data;
  } catch (err) {
    return (
      err.response?.data || {
        success: false,
        message: "Server error",
      }
    );
  }
};

// LOGIN
export const loginUser = async (data) => {
  try {
    const res = await api.post("/api/auth/login", {
      email: data.email,
      password: data.password,
    });

    return res.data;
  } catch (err) {
    return (
      err.response?.data || {
        success: false,
        message: "Server error",
      }
    );
  }
};
