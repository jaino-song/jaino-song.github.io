'use client';
import { usePageStore, type Page } from "@/store/usePageStore";
import { motion } from "framer-motion";

const NavButton = ({ text, onClick }: { text: string, onClick: (text: Page) => void }) => {
  const { page } = usePageStore();
  const isActive = page === text;
  
  return (
    <button 
      className="relative w-24 phone:w-30 h-14 rounded-[50px] cursor-pointer z-10"
      onClick={() => {
        onClick(text as Page);
      }}
    >
      {isActive && (
        <motion.div
          layoutId="activeBackground"
          className="absolute inset-0 bg-neutral-600 rounded-[50px]"
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 30
          }}
        />
      )}
      <motion.h3 
        className="relative z-10 text-base text-lg md:text-xl font-bold font-['Poppins']"
        animate={{
          color: isActive ? 'var(--color-Main-Text)' : 'var(--color-Disabled)'
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
      >
        {text}
      </motion.h3>
    </button>
  );
};

export default NavButton;