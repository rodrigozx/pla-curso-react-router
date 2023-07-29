import { HashRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import HomePage from "./pages/Homepage";
import BlogPage from "./pages/BlogPage";
import BlogPost from "./BlogPost";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <HashRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
