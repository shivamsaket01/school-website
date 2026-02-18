import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './components/About';
import Academics from './components/Academics';
import Sports from './components/Sports';
import CoCurriculum from './components/CoCurriculum';
import Admissions from './components/Admissions';
import Gallery from './components/Gallery';


// New Pages
import NoticeBoard from './pages/NoticeBoard';
import Faculty from './pages/Faculty';
import Login from './pages/Login';
import Signup from './pages/signup';
import FeePayment from './pages/FeePayment';
import StudyMaterial from './pages/StudyMaterial';
import Calendar from './pages/Calendar';
import Transport from './pages/Transport';
import AdminDashboard from './pages/AdminDashboard';
import BeyondTheBooks from './pages/BeyondTheBooks';
import SkillBasedPrograms from './pages/SkillBasedPrograms';
import NotFound from './pages/NotFound';

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";



// Scroll to top
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};





function App() {
  return (
    <AuthProvider>   {/* 👈 Sabse bahar */}
      <Router>
        <ScrollToTop />
        <div className="font-inter bg-gray-50 text-gray-900 min-h-screen flex flex-col transition-opacity duration-500">
          <Navbar />
          <main className="flex-grow">
            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/co-curriculum" element={<CoCurriculum />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/admissions" element={<Admissions />} />

              {/* New Routes */}
              <Route path="/notice-board" element={<NoticeBoard />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/fees" element={<FeePayment />} />
              <Route path="/study-material" element={<StudyMaterial />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/transport" element={<Transport />} />

              {/* ✅ Protected Admin Route */}
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />

              <Route path="/beyond-the-books" element={<BeyondTheBooks />} />
              <Route path="/skill-based-programs" element={<SkillBasedPrograms />} />

              <Route path="*" element={<NotFound />} />

            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}


// function App() {
//   return (
//     <Router>
//       <ScrollToTop />
//       <div className="font-inter bg-gray-50 text-gray-900 min-h-screen flex flex-col transition-opacity duration-500">
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/academics" element={<Academics />} />
//             <Route path="/sports" element={<Sports />} />
//             <Route path="/co-curriculum" element={<CoCurriculum />} />
//             <Route path="/gallery" element={<Gallery />} />
//             <Route path="/admissions" element={<Admissions />} />


//             {/* New Routes */}
//             <Route path="/notice-board" element={<NoticeBoard />} />
//             <Route path="/faculty" element={<Faculty />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/fees" element={<FeePayment />} />
//             <Route path="/study-material" element={<StudyMaterial />} />
//             <Route path="/calendar" element={<Calendar />} />
//             <Route path="/transport" element={<Transport />} />
//             <Route path="/admin" element={<AdminDashboard />} />
//             <Route path="/beyond-the-books" element={<BeyondTheBooks />} />
//             <Route path="/skill-based-programs" element={<SkillBasedPrograms />} />


//             <AuthProvider>
//   <Router>
//     ...
//   </Router>
// </AuthProvider>

//         <Route 
//   path="/admin" 
//   element={
//     <ProtectedRoute>
//       <AdminDashboard />
//     </ProtectedRoute>
//   } 
// />

 

//             {/* 404 Route */}
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   )
// }

export default App;
