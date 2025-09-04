import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Send, MessageCircle, Gift, Star, Plus } from "lucide-react";

export default function Wishes() {
  const [wishes, setWishes] = useState([
    {
      name: "Sarah",
      message:
        "Happy Birthday! Your jazz recommendations have enriched my life so much. Here's to another year of amazing music discoveries! 🎷",
      relationship: "Family Friend",
    },
    {
      name: "Mike",
      message:
        "Dad, thank you for always being my go-to for any random question! Your knowledge never ceases to amaze me. Have the best birthday! 📚",
      relationship: "Son",
    },
    {
      name: "Linda",
      message:
        "Wishing the most wonderful man a fantastic birthday! Your warmth and wisdom light up every room. Enjoy your special day! ❤️",
      relationship: "Family",
    },
    {
      name: "Tom",
      message:
        "Happy Birthday to the guy who taught me everything about cars AND jazz! Thanks for being such an incredible friend. 🚗🎵",
      relationship: "Old Friend",
    },
  ]);

  const [newWish, setNewWish] = useState({
    name: "",
    message: "",
    relationship: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newWish.name && newWish.message) {
      setWishes([...wishes, newWish]);
      setNewWish({ name: "", message: "", relationship: "" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      x: -100,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const wishVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          <div className="flex justify-center items-center space-x-3 mb-4">
            <motion.div
              whileHover={{
                rotate: [0, -10, 10, 0],
                scale: 1.1,
              }}
              transition={{ duration: 0.5 }}
            >
              <MessageCircle className="w-16 h-16 text-amber-600" />
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-12 h-12 text-red-500" />
            </motion.div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            Birthday Wishes
          </h1>
          <p className="text-xl text-amber-700">
            Heartfelt messages from family and friends
          </p>
        </motion.div>

        {/* Existing Wishes */}
        <motion.div
          className="space-y-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {wishes.map((wish, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg group cursor-pointer"
                variants={wishVariants}
                whileHover={{
                  scale: 1.02,
                  y: -2,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <motion.h3
                      className="text-xl font-bold text-amber-800 group-hover:text-amber-900 transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {wish.name}
                    </motion.h3>
                    <p className="text-amber-600 text-sm">
                      {wish.relationship}
                    </p>
                  </div>
                  <motion.div
                    className="text-2xl"
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      scale: 1.2,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Gift className="w-8 h-8 text-amber-600" />
                  </motion.div>
                </div>
                <motion.p
                  className="text-gray-700 leading-relaxed italic group-hover:text-gray-800 transition-colors"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  "{wish.message}"
                </motion.p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Add New Wish Form */}
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          <motion.h2
            className="text-2xl font-bold text-amber-800 mb-6 text-center flex items-center justify-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Plus className="w-6 h-6" />
            <span>Add Your Birthday Wish</span>
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <label className="block text-amber-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={newWish.name}
                  onChange={(e) =>
                    setNewWish({ ...newWish, name: e.target.value })
                  }
                  className="w-full p-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your name"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <label className="block text-amber-700 font-medium mb-2">
                  Relationship
                </label>
                <input
                  type="text"
                  value={newWish.relationship}
                  onChange={(e) =>
                    setNewWish({ ...newWish, relationship: e.target.value })
                  }
                  className="w-full p-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  placeholder="e.g., Friend, Family, Colleague"
                />
              </motion.div>
            </div>

            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <label className="block text-amber-700 font-medium mb-2">
                Your Birthday Message
              </label>
              <textarea
                value={newWish.message}
                onChange={(e) =>
                  setNewWish({ ...newWish, message: e.target.value })
                }
                rows={4}
                className="w-full p-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                placeholder="Share your birthday wishes, favorite memories, or what makes him special..."
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-amber-700 hover:to-amber-800 transition-colors flex items-center justify-center space-x-2"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Send className="w-5 h-5" />
              <span>Add Wish</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Jazz Quote */}
        <motion.div
          className="mt-12 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.div
            className="bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-2xl p-6 shadow-xl"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.p
              className="text-lg italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              "Like a beautiful jazz improvisation, your life gets more amazing
              with each passing year"
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
