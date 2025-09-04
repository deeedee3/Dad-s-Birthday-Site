import { motion } from "framer-motion";
import {
  Music,
  Car,
  BookOpen,
  Users,
  Brain,
  Heart,
  Mic,
  HandHeart,
  Star,
  Book,
} from "lucide-react";

export default function About() {
  const interests = [
    {
      icon: Music,
      iconColor: "text-amber-600",
      title: "Jazz Music",
      description:
        "From Miles Davis to John Coltrane, he knows every riff, every story behind the music. Ask him about any jazz standard and prepare for a masterclass!",
    },
    {
      icon: Car,
      iconColor: "text-blue-600",
      title: "Automotive Enthusiast",
      description:
        "Whether it's a vintage Mustang or the latest Tesla, he can tell you everything about engines, design, and automotive history.",
    },
    {
      icon: BookOpen,
      iconColor: "text-green-600",
      title: "Lifelong Learner",
      description:
        "Always reading, always learning. From philosophy to science fiction, his bookshelf is as diverse as his conversations.",
    },
    {
      icon: Users,
      iconColor: "text-purple-600",
      title: "Social Connector",
      description:
        "The life of every party, the friend everyone calls. He has this magical ability to make everyone feel welcome and heard.",
    },
  ];

  const qualities = [
    { icon: Brain, text: "Encyclopedia of random facts" },
    { icon: Heart, text: "Heart of gold for everyone he meets" },
    { icon: Mic, text: "Master storyteller" },
    { icon: HandHeart, text: "Always ready to help a friend" },
    { icon: Star, text: "Lights up every room he enters" },
    { icon: Book, text: "Wisdom that comes from years of curiosity" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            About Our Renaissance Dad
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            A man of many talents, infinite curiosity, and boundless love for
            family and friends
          </p>
        </motion.div>

        {/* Interests Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {interests.map((interest, i) => {
            const Icon = interest.icon;
            return (
              <motion.div
                key={i}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  transition: { type: "spring", stiffness: 300 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className={`w-12 h-12 ${interest.iconColor}`} />
                </motion.div>
                <h3 className="text-2xl font-bold text-amber-800 mb-3 text-center group-hover:text-amber-900 transition-colors">
                  {interest.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-center group-hover:text-gray-800 transition-colors">
                  {interest.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* What Makes Him Special */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          <motion.h3
            className="text-3xl font-bold text-amber-800 mb-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            What Makes Him Special
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {qualities.map((quality, i) => {
              const Icon = quality.icon;
              return (
                <motion.div
                  key={i}
                  className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg group hover:bg-amber-100 transition-colors cursor-pointer"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    x: 10,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.2,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 text-amber-600 group-hover:text-amber-700" />
                  </motion.div>
                  <span className="text-lg group-hover:text-amber-900 transition-colors">
                    {quality.text}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            className="bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-2xl p-8 shadow-xl"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.p
              className="text-2xl italic mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              "A man who knows about everything and shares it with love"
            </motion.p>
            <motion.p
              className="text-amber-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              - Everyone who's ever had a conversation with him
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
