import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, User, Camera, Heart, Music } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/about", icon: User, label: "About" },
    { to: "/gallery", icon: Camera, label: "Gallery" },
    { to: "/wishes", icon: Heart, label: "Wishes" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      className="bg-gradient-to-r from-amber-800 to-amber-700 text-white p-4 shadow-lg sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.div
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Music className="w-8 h-8 text-yellow-300" />
          </motion.div>
          <h1 className="text-xl font-bold">Dad's Birthday Jazz</h1>
        </motion.div>

        <div className="flex space-x-6">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  to={item.to}
                  className={`transition-all duration-200 font-medium flex items-center space-x-2 px-3 py-2 rounded-lg ${
                    isActive(item.to)
                      ? "bg-yellow-300 text-amber-800 shadow-lg"
                      : "hover:text-yellow-300 hover:bg-amber-600/30"
                  }`}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 5,
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
