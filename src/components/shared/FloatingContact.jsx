"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X, Share2 } from "lucide-react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { TbMessageFilled } from "react-icons/tb";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactLinks = [
    {
      id: "whatsapp",
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-2xl text-white" />,
      url: "https://wa.me/8801XXXXXXXXX",
      bgColor: "bg-emerald-500 hover:bg-emerald-600",
    },
    {
      id: "facebook",
      name: "Facebook",
      icon: <FaFacebook className="text-2xl text-white" />,
      url: "https://m.me/yourusername",
      bgColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      id: "phone",
      name: "Call Us",
      icon: <Phone className="text-2xl text-white" />,
      url: "tel:+8801XXXXXXXXX",
      bgColor: "bg-indigo-600 hover:bg-indigo-700",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    exit: { opacity: 0, y: 15, scale: 0.5 },
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-end gap-3"
          >
            {contactLinks.map((item) => (
              <motion.a
                key={item.id}
                variants={itemVariants}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 decoration-none"
              >
                <span className="px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-900/80 backdrop-blur-md rounded-lg shadow-lg border border-slate-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {item.name}
                </span>

                <div
                  className={`p-3.5 rounded-full shadow-lg border border-white/10 text-white transition-colors duration-200 ${item.bgColor}`}
                >
                  {item.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
        className="p-4 rounded-full rounded-bl-none bg-slate-900 text-white shadow-2xl border border-slate-700/60 flex items-center justify-center focus:outline-none hover:bg-slate-800 transition-colors"
        aria-label="Contact Options"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isOpen ? (
            <X className="text-3xl text-rose-400" />
          ) : (
            <TbMessageFilled className="text-2xl text-green-400" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default FloatingContact;
