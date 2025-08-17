import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-900 text-white py-4 shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-center gap-6">
        <Link
          to="/"
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
        >
          HeroBanner
        </Link>

        <Link
          to="/timeline"
          className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition"
        >
          Timeline
        </Link>

        <Link
          to="/jellyfish"
          className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
        >
          Jellyfish
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
