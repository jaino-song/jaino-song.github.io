'use client';
import { usePageStore, type Page } from "@/store/usePageStore";
import NavButton from "./NavButton";
import { toast } from "react-toastify";

const NavContainer = () => {
  const { setPage } = usePageStore();
  return (
    <div className="w-80 h-14 relative rounded-[50px] bg-NavBg flex items-center justify-between">
        <NavButton text="Work" onClick={() => setPage('Work' as Page)} />
        <NavButton text="Info" onClick={() => {toast.warning("Info Page Under Work")}} />
        <NavButton text="Blog" onClick={() => {toast.warning("Blog Page Under Work")}} />
    </div>
  );
};

export default NavContainer;