import { HashRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import HomePage from "./pages/Homepage";
import BlogPage from "./pages/BlogPage";
import BlogPost from "./BlogPost";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import { AuthProvider } from "./auth";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/blog" element={<BlogPage />}>
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Route>

            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/profile" element={<ProfilePage />} />

            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
