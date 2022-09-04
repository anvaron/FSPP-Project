// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import NavBar from "./Components/NavBar";
// import Project from "./Components/Project";
// import ProjectTeam from "./Components/ProjectTeam";
// import Footer from "./Components/Footer";

// PAGES
import Home  from "./Pages/Home";
import Index from "./Pages/Index";
import View  from "./Pages/View";
// import Edit from "./Pages/Edit";
// import New from "./Pages/New";
// import NotFound from "./Pages/NotFound";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <NavBar />
        <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Index />} />
          <Route path="/products/:id" element={<View />} />
          {/* <Route path="/snacks/:id/edit" element={<Edit />} />
          <Route path="/snacks/new" element={<New />} />
          <Route path="/snacks/project" element={<Project />} />
          <Route path="/snacks/team" element={<ProjectTeam />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
        </main>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}