import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modal/Modal";
import RegisterModal from "./components/modal/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modal/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};
const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang='en'>
      <body className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        {/* <Modal isOpen /> */}
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  );
}
