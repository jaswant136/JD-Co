import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <CustomCursor />
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}
