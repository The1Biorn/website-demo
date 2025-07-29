import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed w-full bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MySite</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/services" className="hover:underline">
          Services
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
