import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ServicePage from "./pages/ServicePage";
import TeamPage from "./pages/TeamPage";
import MediaPage from "./pages/MediaPage";
import OfficePage from "./pages/OfficePage";
import CareerPage from "./pages/Career";
import BlogPage from "./pages/BlogPage";
import AdminLayout from "./components/AdminLayout";
import { AdminDashboard } from "./pages/AdminDashboard";
import { AdminLoginPage } from "./pages/AdminLoginPage";
import AdminRegisterPage from "./components/AdminRegisterPage";
import { useAuth } from "./context/AuthContext";
import { useEffect } from "react";
import CreateBlogPage from "./pages/CreateBlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import EditBlogPage from "./pages/EditBlogPage";
import CSRPage from "./pages/Csr";
import InternshipPage from "./pages/Internship";
import UserManagementPage from "./pages/UserManagementPage";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function App() {
  const { isAdmin, user } = useAuth();
  useEffect(() => {
    console.log("Current auth state:", { user, isAdmin });
  }, [user, isAdmin]);
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/stations" element={<OfficePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/csr" element={<CSRPage />} />
        <Route path="/internship" element={<InternshipPage />} />

        {/* Admin auth routes */}
        <Route path="/login" element={<AdminLoginPage />} />
        <Route path="/register" element={<AdminRegisterPage />} />

        <Route
          path="/dashboard"
          element={
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/blogs/create"
          element={
            <AdminLayout>
              <CreateBlogPage />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/blogs/edit/:id"
          element={
            <AdminLayout>
              <EditBlogPage />
            </AdminLayout>
          }
        />

        <Route
          path="/dashboard/users"
          element={
            <AdminLayout>
              <UserManagementPage />
            </AdminLayout>
          }
        />
        <Route path="/blogs/:id" element={<BlogDetailPage />} />

        {/* Protected admin routes */}
        {/* <Route element={<ProtectedRoute adminOnly />}>
          <Route element={<AdminLayout />}> */}
        {/* <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/blogs/create" element={<CreateBlogPage />} /> */}
        {/* </Route>
        </Route> */}
      </Routes>
      <Footer />
    </>
  );
}
