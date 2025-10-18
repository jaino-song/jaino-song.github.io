import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "David J Song | Frontend Software Engineer",
  description: "David J Song is a problem-solving frontend software engineer with 3+ years of development experience in developing AI-integrated web solutions to automate workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <ClientLayout>
          <main className="w-full px-[10%]">
            {children}
          </main>
        </ClientLayout>
      </body>
    </html>
  );
}
