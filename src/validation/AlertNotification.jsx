import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AlertNotification = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true); // Initialize isVisible to true

  useEffect(() => {
    // Ensure the effect runs every time the component renders
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]); // Add message as a dependency to the effect
  const displayAlert = message;
  const alertClasses =
    "fixed top-8 left-1/2 transform -translate-x-1/2 opacity-100 transition-transform duration-500 ease-in-out mt-2 p-4 mb-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-400 mx-auto text-center w-fit flex items-center";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={displayAlert ? alertClasses : "hidden"}
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div className="text-xs sm:text-sm">{message}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AlertNotification;
