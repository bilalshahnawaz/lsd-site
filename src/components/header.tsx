"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

interface LinkType {
  hash: string;
  name: string;
}

const SlideTabs = ({ isMobile, toggleMenu }: { isMobile: boolean; toggleMenu: () => void }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [activeTab, setActiveTab] = useState<string | null>(null); // Track the active tab
  const pathname = usePathname();
  const tabRefs = useRef<{ [key: string]: HTMLLIElement | null }>({}); // Track refs for each tab

  // Handle scroll events to detect the active section
  useEffect(() => {
    const handleScroll = () => {
      links.forEach((link) => {
        const section = document.querySelector(link.hash);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveTab(link.hash); // Update active tab when section is in view
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Get hash without #
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          const offset = hash === "contact" ? 200 : -96; // Custom offset for 'Contact' section
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition + offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }

        // Set active tab on hash change
        const activeLink = links.find((link) => link.hash === `#${hash}`);
        if (activeLink) {
          setActiveTab(`#${hash}`);
        }
      }
    };

    // Listen to hash change events
    window.addEventListener("hashchange", handleHashChange);

    // Handle any hash present on page load
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleMouseLeave = () => {
    // Do nothing on mouse leave, the position will stay on the active tab
  };

  const handleTabClick = (link: LinkType, ref: React.RefObject<HTMLLIElement>) => {
    setActiveTab(link.hash); // Set active tab
    if (ref?.current) {
      const { offsetLeft, offsetWidth } = ref.current;
      setPosition({
        left: offsetLeft,
        width: offsetWidth,
        opacity: 1,
      });
    }

    // Scroll to element or navigate to the URL
    const currentPath = pathname === "/" ? "" : pathname;
    const targetPath = link.hash.split("#")[0] || "";

    if (currentPath === targetPath) {
      const element = document.querySelector(link.hash);
      if (element) {
        const offset = link.hash === "#contact" ? -120 : -96; // Custom offset for 'Contact' section
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition + offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      const fullUrl = `${window.location.origin}${link.hash}`;
      window.location.href = fullUrl;
    }
  };

  useEffect(() => {
    if (activeTab && tabRefs.current[activeTab]) {
      const { offsetLeft, offsetWidth } = tabRefs.current[activeTab]!;
      setPosition({
        left: offsetLeft,
        width: offsetWidth,
        opacity: 1,
      });
    }
  }, [activeTab]);

  return (
    <motion.ul
      onMouseLeave={handleMouseLeave}
      className={`relative flex w-full flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-white sm:w-[initial] sm:flex-nowrap sm:gap-5 ${
        isMobile ? "flex-col" : "flex-row"
      }`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      {links.map((link) => (
        <Tab
          key={link.hash}
          setPosition={setPosition}
          activeTab={activeTab}
          link={link}
          handleTabClick={handleTabClick}
          tabRefs={tabRefs}
          isMobile={isMobile}
          toggleMenu={toggleMenu}
        />
      ))}
      {!isMobile && <Cursor position={position} />}
    </motion.ul>
  );
};

const Tab = ({
  link,
  setPosition,
  activeTab,
  handleTabClick,
  tabRefs,
  isMobile,
  toggleMenu,
}: {
  link: LinkType;
  setPosition: React.Dispatch<React.SetStateAction<{ left: number; width: number; opacity: number }>>;
  activeTab: string | null;
  handleTabClick: (link: LinkType, ref: React.RefObject<HTMLLIElement>) => void;
  tabRefs: React.MutableRefObject<{ [key: string]: HTMLLIElement | null }>;
  isMobile: boolean;
  toggleMenu: () => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    // On page load or hash change, set the highlight to the active tab
    if (activeTab === link.hash && ref.current) {
      const { offsetLeft, offsetWidth } = ref.current;
      setPosition({
        left: offsetLeft,
        width: offsetWidth,
        opacity: 1,
      });
    }

    // Save ref for later use in scroll-based updates
    tabRefs.current[link.hash] = ref.current;
  }, [activeTab, link.hash, setPosition, tabRefs]);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { offsetLeft, offsetWidth } = ref.current;

        setPosition({
          left: offsetLeft,
          width: offsetWidth,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer h-3/4 flex items-center justify-center"
    >
      <Link href={link.hash}>
        <span
          className={`flex w-full items-center justify-center px-3 py-3 hover:text-white ${
            activeTab === link.hash ? "text-white" : "text-gray-300"
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleTabClick(link, ref); // Pass the reference of the clicked tab
            if (isMobile) toggleMenu(); // Close the menu on mobile after click
          }}
        >
          {link.name}
        </span>
      </Link>
    </li>
  );
};

const Cursor = ({ position }: { position: { left: number; width: number; opacity: number } }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute z-0 h-7 rounded-full bg-slate-800 md:h-12"
    />
  );
};

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4rem] w-full rounded-none border border-sky-950 border-opacity-40 bg-slate-700 shadow-black/[0.10] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      ></motion.div>

      <nav className="fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 w-full sm:w-auto">
        <div className="flex justify-between items-center w-full sm:hidden px-4 py-2">
          <img src="/lsd-white.png" alt="Logo" className="h-6 w-auto" />
          <button onClick={toggleMenu} className="text-white">
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>
        <div className={`absolute sm:relative top-full left-0 w-full bg-slate-700 sm:flex sm:bg-transparent ${menuOpen ? "block" : "hidden"}`}>
          <SlideTabs isMobile={isMobile} toggleMenu={toggleMenu} />
        </div>
      </nav>
    </header>
  );
}