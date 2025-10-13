'use client';
import { usePageStore, type Page } from "@/store/usePageStore";
import NavButton from "./NavButton";
import { toast } from "react-toastify";

const NavContainer = () => {
  const { setPage } = usePageStore();

  const handleButtonClick = (newPage: Page) => {
    setPage(newPage);
  };


  return (
    <div className="w-72 phone:w-80 h-14 mx-auto relative rounded-[50px] bg-NavBg flex items-center justify-center">
      <NavButton text="Work" onClick={() => handleButtonClick('Work' as Page)} />
      <NavButton text="Info" onClick={() => toast.info('Info Page Under Work')} />
      <NavButton text="Blog" onClick={() => toast.info('Blog Page Under Work')} />
    </div>
  )
};

export default NavContainer;