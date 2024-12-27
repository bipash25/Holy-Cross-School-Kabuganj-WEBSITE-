import React, { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./pages/about";
import Vision from "./pages/vision";
import Objectives from "./pages/objectives";
import Message from "./pages/message";
import Fees from "./pages/fees";
import Curriculum from "./pages/curriculum";
import Uniform from "./pages/uniform";
import Timing from "./pages/timing";
import Leaves from "./pages/leaves";
import Library from "./pages/library";
import ComputerLab from "./pages/computer-lab";
import ScienceLab from "./pages/science-lab";
import Examinations from "./pages/examinations";
import Admission from "./pages/admission";
import ParentInfo from "./pages/parent-info";
import CoCurricular from "./pages/co-curricular";
import StudentConduct from "./pages/student-conduct";
import Achievements from "./pages/achievements";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import routes from "tempo-routes";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="hcsk-theme">
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/objectives" element={<Objectives />} />
          <Route path="/message" element={<Message />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/uniform" element={<Uniform />} />
          <Route path="/timing" element={<Timing />} />
          <Route path="/leaves" element={<Leaves />} />
          <Route path="/library" element={<Library />} />
          <Route path="/computer-lab" element={<ComputerLab />} />
          <Route path="/science-lab" element={<ScienceLab />} />
          <Route path="/examinations" element={<Examinations />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/parent-info" element={<ParentInfo />} />
          <Route path="/co-curricular" element={<CoCurricular />} />
          <Route path="/student-conduct" element={<StudentConduct />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
