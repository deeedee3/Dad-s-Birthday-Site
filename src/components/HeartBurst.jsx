import Lottie from "lottie-react";
import { motion } from "framer-motion";
import heartBurstAnimation from "../assets/lottie/heart-burst.json";

const HeartBurst = ({
  className = "w-32 h-32",
  loop = true,
  autoplay = true,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: delay,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      }}
      className={className}
    >
      <Lottie
        animationData={heartBurstAnimation}
        loop={loop}
        autoplay={autoplay}
        style={{
          width: "100%",
          height: "100%",
          filter: "hue-rotate(10deg) saturate(1.2)",
        }}
      />
    </motion.div>
  );
};

export default HeartBurst;
