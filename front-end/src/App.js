// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import NavBar from "./components/NavBar";
//import Register from "./components/Register";
//import ProductForm from "./components/ProductNewForm";
// import ProjectTeam from "./components/ProjectTeam";
// import Footer from "./components/Footer";

// PAGES
//import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home  from "./pages/Home";
import Index from "./pages/Index";
import View  from "./pages/View";
import Edit from "./pages/Edit";
import New from "./pages/New";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <NavBar />
        <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/products" element={<Index />} />
          <Route path="/category/:id" element={<Index />} />
          <Route path="/products/:id" element={<View />} />
          <Route path="/reviews/:id" element={<View />} />
          <Route path="/products/new" element={<New />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products/:id/edit" element={<Edit />} />
          {/*
          <Route path="/snacks/project" element={<Project />} />
          <Route path="/snacks/team" element={<ProjectTeam />} />
           */}
        </Routes>
        </main>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}