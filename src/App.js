import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Sidebar from "./components/common/Sidebar";
import Authentication from "./pages/Authentication";
import Navbar from "./components/common/Navbar";
import { SuccessPage, ResetLinkSent, ActivationComponent } from "./pages";
import Footer from "./components/common/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "./components/utils/userContext";
import { roleRoutes } from "./components/routing/userRoutes";
// import { ActivationComponent } from "./pages";
const sideBarWidth = 250;

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { auth, role } = useUser();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const userRoutes = roleRoutes[role] || roleRoutes.Student; // Default to Student if role is not recognized
  return (
    <>
      {auth ? (
        <Box sx={{ display: "flex" }}>
          <ToastContainer />
          <Navbar
            sideBarWidth={sideBarWidth}
            handleDrawerToggle={handleDrawerToggle}
          />
          <Sidebar
            sideBarWidth={sideBarWidth}
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              px: { xs: 1, md: 2 },
              width: { xs: "100%", md: `calc(100% - ${sideBarWidth}px)` },
            }}
          >
            {/* Routes */}
            <Routes>
              {userRoutes.map((route) => (
                <Route
                  key={route.id}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
            <Footer />
          </Box>
        </Box>
      ) : (
        <>
          <Routes>
            <Route path="/login" element={<Authentication />} />
            <Route
              path="/success"
              element={
                <SuccessPage
                  color="green"
                  title="Registration Successful"
                  body="We appreciate your registration."
                  message="An email with further instructions has been sent to your email
                  address."
                  buttonText="Go to Login"
                  linkTo="/login"
                />
              }
            />
            <Route path="/reset_password" element={<ResetLinkSent />} />
            <Route
              path="/activation/:uid/:token/"
              element={<ActivationComponent />}
            ></Route>
          </Routes>
          <ToastContainer />
        </>
      )}
    </>
  );
}

export default App;
