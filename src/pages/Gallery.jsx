import { motion } from "framer-motion";
import {
  Music,
  Users,
  Camera,
  Upload,
  Heart,
  Car,
  BookOpen,
} from "lucide-react";

export default function Gallery() {
  const photoCategories = [
    {
      title: "Jazz Sessions & Music Moments",
      description: "Dad in his element - surrounded by music",
      icon: Music,
      iconColor: "text-amber-600",
      photos: [
        {
          src: "https://via.placeholder.com/400x300/D97706/FFFFFF?text=Jazz+Night",
          caption: "At the local jazz club",
        },
        {
          src: "https://via.placeholder.com/400x300/92400E/FFFFFF?text=Home+Concert",
          caption: "Playing at home",
        },
        {
          src: "https://via.placeholder.com/400x300/A16207/FFFFFF?text=Music+Collection",
          caption: "His precious vinyl collection",
        },
      ],
    },
    {
      title: "Family & Friends",
      description: "The social butterfly bringing people together",
      icon: Users,
      iconColor: "text-blue-600",
      photos: [
        {
          src: "https://via.placeholder.com/400x300/EA580C/FFFFFF?text=Family+Dinner",
          caption: "Family gathering",
        },
        {
          src: "https://via.placeholder.com/400x300/DC2626/FFFFFF?text=Birthday+Party",
          caption: "Previous birthday celebration",
        },
        {
          src: "https://via.placeholder.com/400x300/B91C1C/FFFFFF?text=Friends+BBQ",
          caption: "Hosting friends for BBQ",
        },
      ],
    },
    {
      title: "Adventures & Hobbies",
      description: "Exploring the world with curiosity",
      icon: Car,
      iconColor: "text-green-600",
      photos: [
        {
          src: "https://via.placeholder.com/400x300/0891B2/FFFFFF?text=Car+Show",
          caption: "At the vintage car show",
        },
        {
          src: "https://via.placeholder.com/400x300/0E7490/FFFFFF?text=Bookstore",
          caption: "In his favorite bookstore",
        },
        {
          src: "https://via.placeholder.com/400x300/155E75/FFFFFF?text=Travel",
          caption: "Travel adventures",
        },
      ],
    },
  ];

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

  const photoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
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
          <div className="flex justify-center mb-4">
            <motion.div
              whileHover={{
                rotate: [0, -10, 10, 0],
                scale: 1.1,
              }}
              transition={{ duration: 0.5 }}
            >
              <Camera className="w-16 h-16 text-amber-600" />
            </motion.div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            Life in Pictures
          </h1>
          <p className="text-xl text-amber-700">
            Capturing the moments that make Dad so special
          </p>
        </motion.div>

        {/* Photo Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {photoCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                className="mb-16"
                variants={itemVariants}
              >
                <motion.div
                  className="text-center mb-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex justify-center items-center space-x-3 mb-4">
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.2,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className={`w-10 h-10 ${category.iconColor}`} />
                    </motion.div>
                    <h2 className="text-3xl font-bold text-amber-800">
                      {category.title}
                    </h2>
                  </div>
                  <p className="text-amber-600">{category.description}</p>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  variants={containerVariants}
                >
                  {category.photos.map((photo, photoIndex) => (
                    <motion.div
                      key={photoIndex}
                      className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
                      variants={photoVariants}
                      whileHover={{
                        scale: 1.03,
                        y: -5,
                        transition: { type: "spring", stiffness: 300 },
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <motion.img
                          src={photo.src}
                          alt={photo.caption}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          initial={{ scale: 1.1 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                      <motion.div
                        className="p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                      >
                        <p className="text-gray-700 font-medium group-hover:text-amber-800 transition-colors">
                          {photo.caption}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-2xl p-8 shadow-xl text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)",
          }}
        >
          <motion.div
            className="flex justify-center mb-4"
            whileHover={{
              rotate: [0, -5, 5, 0],
              scale: 1.1,
            }}
            transition={{ duration: 0.5 }}
          >
            <Heart className="w-12 h-12 text-yellow-300" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-4">Share Your Memories!</h3>
          <p className="text-amber-100 mb-6">
            Have a special photo with Dad? We'd love to add it to this gallery!
          </p>
          <motion.button
            className="bg-white text-amber-700 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors flex items-center space-x-2 mx-auto"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Upload className="w-5 h-5" />
            <span>Submit a Photo</span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
