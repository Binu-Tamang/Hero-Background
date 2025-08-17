import Navbar from "./components/NabBar"; 
import AppRoutes from "./routes/index";  

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar always visible */}
      <Navbar />

      {/* Routes will render different pages below Navbar */}
      <AppRoutes />
    </div>
  );
}
