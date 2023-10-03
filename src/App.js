import React, { Component, Suspense, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./scss/style.scss";
import AuthContext from "./auth/auth-context";
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));
// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
// const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
// const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));
const LandingPage = React.lazy(() =>
  import("./views/pages/landing-page/pages/landinHome")
);
const ResetPassword = React.lazy(() =>
  import("./views/pages/reset-password/reset-password")
);

const App = () => {
  const [logUser, setLogUser] = useState(localStorage.getItem("token"));

  return (
    <AuthContext.Provider value={{ logUser, setLogUser }}>
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route
              exact
              path="/register"
              name="Register Page"
              element={<Register />}
            />
            {/* <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} /> */}
            <Route
              exact
              path="/landing"
              name="Landing Page"
              element={<LandingPage />}
            />
            <Route
              exact
              path="/reset-password"
              name="Reset Password"
              element={<ResetPassword />}
            />
            <Route
              path="*"
              name="Home"
              element={logUser ? <DefaultLayout /> : <Navigate to="/landing" />}
            />
            {/* <Route path="*" name="Home" element={<DefaultLayout />} /> */}
          </Routes>
        </Suspense>
      </HashRouter>
    </AuthContext.Provider>
  );
};

export default App;
