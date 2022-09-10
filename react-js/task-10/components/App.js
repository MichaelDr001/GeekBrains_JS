import { Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Layout from "./Layout";
import ProtectedRoutes from "./ProtectedRoutes";
import AddContactPage from "../pages/AddContactPage";
import View from "./View";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/register"} element={<RegisterPage />} />
        <Route
          path={"/addContact"}
          element={
            <ProtectedRoutes>
              <AddContactPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path={"/update/:id"}
          element={
            <ProtectedRoutes>
              <AddContactPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path={"/view/:id"}
          element={
            <ProtectedRoutes>
              <View />
            </ProtectedRoutes>
          }
        />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/about"} element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
