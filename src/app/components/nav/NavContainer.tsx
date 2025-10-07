'use client';
import { usePageStore, type Page } from "@/store/usePageStore";
import NavButton from "./NavButton";

const NavContainer = () => {
  const { setPage } = usePageStore();
  return (
    <div className="w-80 h-14 relative rounded-[50px] bg-NavBg flex items-center justify-between">
        <NavButton text="Work" onClick={() => setPage('Work' as Page)} />
        <NavButton text="Info" onClick={() => setPage('Info' as Page)} />
        <NavButton text="Blog" onClick={() => setPage('Blog' as Page)} />
    </div>
  );
};

export default NavContainer;