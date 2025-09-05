import { motion } from "framer-motion";
import { Music, Brain, Heart, Book, Car, Users } from "lucide-react";
import HeartBurst from "../components/HeartBurst";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <motion.div
        className="text-center p-8 flex flex-col items-center justify-center min-h-screen"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          {/* Musical Note Decoration with Animation */}
          <motion.div
            className="flex justify-center items-center space-x-4 mb-6"
            variants={itemVariants}
          >
            <motion.div variants={floatingVariants} animate="animate">
              <Music className="w-16 h-16 text-amber-600" />
            </motion.div>
            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 1 }}
            >
              <Book className="w-14 h-14 text-amber-700" />
            </motion.div>
            <motion.div
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 2 }}
            >
              <Car className="w-16 h-16 text-amber-600" />
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-amber-800 mb-4"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Happy Birthday Dad!
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl text-amber-700 mb-8 font-medium"
            variants={itemVariants}
          >
            Celebrating a Jazz-Loving Renaissance Man
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-2xl mx-auto mb-8"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Today we celebrate someone truly special - a man who can discuss
              the intricate melodies of Miles Davis, explain the mechanics of a
              vintage car, recommend the perfect book, and light up any room
              with his warmth and wisdom.
            </p>
          </motion.div>

          {/* Photo Placeholder with Enhanced Animation */}
          <motion.div
            className="relative flex justify-center items-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Heart Burst Animations */}
            <div className="absolute -left-16 top-1/2 transform -translate-y-1/2">
              <HeartBurst className="w-24 h-48" delay={3} />
            </div>
            <div className="absolute -right-16 top-1/2 transform -translate-y-1/2">
              <HeartBurst className="w-24 h-48" delay={3.5} />
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
              <HeartBurst className="w-32 h-24" delay={4} />
            </div>

            <motion.img
              src="https://via.placeholder.com/400x400/D97706/FFFFFF?text=Dad's+Photo"
              alt="Birthday Dad"
              className="mx-auto rounded-full shadow-2xl border-8 border-white relative z-10"
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute -top-4 -right-4 text-4xl z-20"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🎂
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 text-4xl z-20"
              animate={{
                rotate: [0, -10, 10, 0],
                scale: [1, 1.2, 1, 1.2, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              🎁
            </motion.div>
          </motion.div>

          {/* Quote Section with Animation */}
          <motion.div
            className="mt-12 p-6 bg-amber-100 rounded-xl border-l-4 border-amber-500"
            variants={itemVariants}
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.p
              className="text-amber-800 italic text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              "Knowledge is like jazz - the more you know, the more beautiful
              the improvisation becomes."
            </motion.p>
            <motion.p
              className="text-amber-600 mt-2 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
            >
              - In honor of a man who embodies both
            </motion.p>

            {/* Music Note */}
            <motion.div
              className="text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
            >
              <p className="text-amber-600 text-xs flex items-center justify-center space-x-2">
                <Music className="w-4 h-4" />
                <span>
                  Listen to "Songbird" by Kenny G in the bottom right corner
                </span>
                <Music className="w-4 h-4" />
              </p>
            </motion.div>
          </motion.div>

          {/* Quick Stats with Lucide Icons and Staggered Animation */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            variants={containerVariants}
          >
            <motion.div
              className="bg-white/60 rounded-lg p-6 text-center group cursor-pointer"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Music className="w-8 h-8 text-amber-600 group-hover:text-amber-700" />
              </motion.div>
              <h3 className="font-bold text-amber-800 group-hover:text-amber-900">
                Jazz Enthusiast
              </h3>
              <p className="text-gray-600 text-sm group-hover:text-gray-700">
                Always ready with a melody and a story
              </p>
            </motion.div>

            <motion.div
              className="bg-white/60 rounded-lg p-6 text-center group cursor-pointer"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <Brain className="w-8 h-8 text-amber-600 group-hover:text-amber-700" />
              </motion.div>
              <h3 className="font-bold text-amber-800 group-hover:text-amber-900">
                Walking Encyclopedia
              </h3>
              <p className="text-gray-600 text-sm group-hover:text-gray-700">
                Knowledge on every topic under the sun
              </p>
            </motion.div>

            <motion.div
              className="bg-white/60 rounded-lg p-6 text-center group cursor-pointer"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 0.5 }}
              >
                <Heart className="w-8 h-8 text-amber-600 group-hover:text-red-500" />
              </motion.div>
              <h3 className="font-bold text-amber-800 group-hover:text-amber-900">
                Social Butterfly
              </h3>
              <p className="text-gray-600 text-sm group-hover:text-gray-700">
                Bringing joy and connection wherever he goes
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
