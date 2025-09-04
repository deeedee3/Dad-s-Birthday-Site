import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Happy Birthday Dad 🎂</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/about" className="hover:text-yellow-300">About</Link>
        <Link to="/gallery" className="hover:text-yellow-300">Gallery</Link>
        <Link to="/wishes" className="hover:text-yellow-300">Wishes</Link>
      </div>
    </nav>
  );
}
