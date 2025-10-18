'use client';
import { ScrollListener } from "./ScrollListener";
import Header from "./Header";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollListener />
      <Header />
      {children}
    </>
  );
}

