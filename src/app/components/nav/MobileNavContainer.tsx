'use client';
import { useState, useEffect } from "react";
import { usePageStore, type Page } from "@/store/usePageStore";
import NavButton from "./NavButton";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

const NavContainer = () => {
  const { page, setPage } = usePageStore();
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine collapse origin based on active page
  const getOriginX = () => {
    if (page === 'Work') return 0; // Collapse from left
    if (page === 'Info') return 0.5; // Collapse from center
    return 1; // Collapse from right (Blog)
  };

  // Calculate widths
  const collapsedWidth = '96px'; // Width of single button on mobile (w-24 = 96px)
  const expandedWidth = '288px'; // w-72 = 288px

  // Nav Container Open Touch Function
  const handleContainerOpenTouch = () => {
    // // Find the h3 element within the clicked element
    // const target = e.target as HTMLElement;
    // const h3Element = target.tagName === 'H3' ? target : target.querySelector('h3');
    // const buttonText = h3Element?.textContent?.trim();
    if (!isExpanded) {
      setIsExpanded(true);
    }
    else {
      
    }
  };

  // Nav Button Click Function
  const handleButtonClick = (newPage: Page) => {
    if (newPage === page) return;
    // Store current page before changing
    setPage(newPage);
    if (isMobile && isExpanded && newPage === page) {
      setTimeout(() => setIsExpanded(false), 2000);
    }
  };

  // Nav Container Close Function
  const handleContainerClose = (buttonPage: Page) => {

  };

  return isMobile ? (
    <motion.div
      className="h-12 sm:h-14 sm:w-80 relative rounded-[50px] bg-NavBg flex items-center justify-between overflow-hidden"
      style={{
        width: isExpanded ? expandedWidth : collapsedWidth,
        transformOrigin: `${getOriginX() * 100}% 50%`
      }}
      animate={{
        width: isExpanded ? expandedWidth : collapsedWidth
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 50
      }}
      onClick={handleContainerClick}
      onTouchStart={handleTouchStart}
    >
      <AnimatePresence mode="sync">
        {shouldShowButton('Work' as Page) && (
          <motion.div
            key="work"
            initial={isExpanded ? { opacity: 0, scale: 0.8 } : false}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <NavButton text="Work" onClick={() => handleButtonClick('Work' as Page)} />
          </motion.div>
        )}
        {shouldShowButton('Info' as Page) && (
          <motion.div
            key="info"
            initial={isExpanded ? { opacity: 0, scale: 0.8 } : false}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            <NavButton text="Info" onClick={() => handleButtonClick('Info' as Page)} />
          </motion.div>
        )}
        {shouldShowButton('Blog' as Page) && (
          <motion.div
            key="blog"
            initial={isExpanded ? { opacity: 0, scale: 0.8 } : false}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <NavButton text="Blog" onClick={() => handleButtonClick('Blog' as Page)} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  ) : (
    <div className="w-80 h-14 relative rounded-[50px] bg-NavBg flex items-center justify-between">
      <NavButton text="Work" onClick={() => handleButtonClick('Work' as Page)} />
      <NavButton text="Info" onClick={() => handleButtonClick('Info' as Page)} />
      <NavButton text="Blog" onClick={() => handleButtonClick('Blog' as Page)} />
    </div>
  );
};

export default NavContainer;