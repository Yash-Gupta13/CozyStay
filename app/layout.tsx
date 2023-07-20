import { Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "./Component/Navbar/Navbar";
import ClientOnly from "./Component/ClientOnly";
import Modal from "./Component/Modal/Modal";
import RegisterModal from "./Component/Modal/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./Component/Modal/LoginModal";
import { getCurrentUser } from "./actions/getCurrentUser";
import RentModal from "./Component/Modal/RentModal";
import SearchModal from "./Component/Modal/SearchModal";


export const metadata = {
  title: "CozyStay",
  description: "CozyStay | HotelBooking ",
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
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal/>
          <RegisterModal />
          <RentModal />
          <LoginModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  );
}
