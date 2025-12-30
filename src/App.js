import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import HomeSections from "./pages/Home";

import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/Navbar";
import { CartProvider } from "./components/CartContext";
import Cart from "./pages/Cart";
import CourseDetails from "./pages/CourseDetails";
import AuthForm from "./pages/AuthForm";

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          {/* NAVBAR */}
          <Navbar />

          {/* PAGE CONTENT */}
          <main className="flex-1">
            <Routes>
              
              <Route path="/" element={<HomeSections />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/course/:id" element={<CourseDetails />} />
            </Routes>
          </main>

          {/* FOOTER */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;