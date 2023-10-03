import axios from "axios";
// import jwtDecode from 'jwt-decode';
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/reception", // Replace with your backend URL
});

// Add a request interceptor to set the token before making a request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Searching The Visitors based on Tazkira
export const searchVisitorApi = async (data) => {
  try {
    const response = await axiosInstance.post("/visitors", data);
    return response;
  } catch (err) {
    console.error("Error:", err);
    throw err; // You should throw the error to propagate it to the caller
  }
};

// Creating Visitor Api
export const newVisitorApi = async (data) => {
  return axiosInstance
    .post("/visitor-create", data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const newAppointmentAPi = async (data) => {
  try {
    const response = await axiosInstance.post("/appointment-create", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (err) {
    console.error("error from Backend", err);
    throw err;
  }
};

// Update Visitor
// export const updateVisitorAPI1 = (data = {}) => {
//   return axios
//     .put("http://localhost:8000/reception/visitor-update", data)
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => {
//       return err;
//     });
// };

export const updateVisitorAPI = (data) => {
  return axiosInstance
    .put("/visitor-update", data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

// Update Appointment
export const updateAppointmentAPI = (data) => {
  return axiosInstance
    .put("/appointment-update", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

// gitting Appointment List
export const gettingAppointmentListAPI = async (data) => {
  console.log("api is called", data);
  try {
    const response = await axiosInstance.post("/", data);
    return response;
  } catch (err) {
    console.error("Error:", err);
    throw err; // You should throw the error to propagate it to the caller
  }
};

// appointment status update
export const appointmentCheckOutAPI = async (data = {}) => {
  console.log("data in the utils", data);
  return axiosInstance
    .put("/appointment-update-status", data)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

// daily reports
export const dashboardDailyReportAPIs = async () => {
  try {
    const response = await axiosInstance.get("/appointment-daily-report"); // Replace with your API endpoint
    return response.data;
  } catch (err) {
    setError(err.message);
  }
};

// Weekly Reports
export const dashboardWeaklyReportAPIs = async () => {
  try {
    const response = await axiosInstance.get("/appointment-weekly-report"); // Replace with your API endpoint
    return response.data;
  } catch (err) {
    setError(err.message);
  }
};

// Monthly Reports
export const dashboardMonthlyReportAPIs = async () => {
  try {
    const response = await axiosInstance.get("/appointment-monthly-report"); // Replace with your API endpoint
    return response.data;
  } catch (err) {
    setError(err.message);
  }
};

// Create Application APi
export const newApplicationAPI = async (data) => {
  try {
    const response = await axiosInstance.post("/application-create", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (err) {
    console.error("error from Backend", err);
    throw err;
  }
};

// gitting Applications List
export const gettingAplicationsListAPIS = async (data) => {
  try {
    const response = await axiosInstance.post("/application-list", data);
    return response.data;
  } catch (err) {
    console.error("Error:", err);
    throw err; // You should throw the error to propagate it to the caller
  }
};

// Update Application Status
export const updateApplicationStatusAPI = async (data) => {
  return axiosInstance
    .put("/application-update-status", data)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

// update application
export const updateApplicationAPI = (data) => {
  return axiosInstance
    .put("/application-update", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

// Directorate List
export const directprateListAPI = async () => {
  try {
    const response = await axiosInstance.get("/directorate-list"); // Replace with your API
    return response.data;
  } catch (err) {
    setError(err.message);
  }
};

// application daily reports
export const dashboard_applicatoin_daily_report_APIS = async () => {
  try {
    const response = await axiosInstance.get("/application-daily-report"); // Replace with your API endpoint
    return response.data;
  } catch (err) {
    setError(err.message);
  }
};

// application Weekly Reports
export const dashboard_applicatoin_weekly_report_APIS = async () => {
  try {
    const response = await axiosInstance.get("/application-weekly-report"); // Replace with your API endpoint
    return response.data;
  } catch (err) {
    setError(err.message);
  }
};

// application Monthly Reports
export const dashboard_applicatoin_monthly_report_APIS = async () => {
  try {
    const response = await axiosInstance.get("/application-monthly-report"); // Replace with your API endpoint
    return response.data;
  } catch (err) {
    setError(err.message);
  }
};

// Login API
export const loginAPI = async (data = {}) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/reception/login",
      data,
      {}
    );
    return response;
  } catch (err) {
    console.error("error from Backend", err);
    throw err;
  }
};

// ResetPassword API
export const ResetPasswordAPI = async (data) => {
  console.log("hello", data);
  return axiosInstance
    .post("/change-password", data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

// Profile
export const ProfileAPI = async () => {
  try {
    const response = await axiosInstance.get("/user-profile");
    return response;
  } catch (err) {
    console.error("Error:", err);
    throw err; // You should throw the error to propagate it to the caller
  }
};

// gitting Daily Appointment list Appointment List
export const gettingDailyAllStatusAppointmentsAPI = async () => {
  try {
    const response = await axiosInstance.get("/appointment-list-daily");
    return response;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};

// gitting Daily Application  List
export const gettingDailyAllStatusApplicatoinsAPI = async () => {
  try {
    const response = await axiosInstance.get("/application-list-daily");
    return response;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};

// General Search
export const gettingSearchResultAPI = async (data) => {
  console.log("data search", data);
  try {
    const response = await axiosInstance.post("/general-search", data);
    console.log("response is returned", response);
    return response;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};
