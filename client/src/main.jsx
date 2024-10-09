import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Header from "./components/HeaderAll";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Admin from "./pages/Admin.jsx";
import AdminRoute from "./utils/adminRoute.jsx";
import Logos from "./components/Logos.jsx";
import Posters from "./components/Posters.jsx";
import Festival from "./components/Festival.jsx";
import Brochure from "./components/Brochure.jsx";
import VisitingCard from "./components/VisitingCard.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> {/* Home page without header */}
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="signup" element={<SignUp />} />
                <Route path="login" element={<Login />} />
                <Route
                  path="admin"
                  element={
                    <AdminRoute>
                      <Admin />
                    </AdminRoute>
                  }
                />
                <Route path="logos" element={<Logos />} />
                <Route path="posters" element={<Posters />} />
                <Route path="festival" element={<Festival />} />
                <Route path="brochure" element={<Brochure />} />
                <Route path="visitingcard" element={<VisitingCard />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
