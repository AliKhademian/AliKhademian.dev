// fonts
import {
  Sora100,
  Sora200,
  Sora300,
  Sora400,
  Sora500,
  Sora600,
  Sora700,
  Sora800,
} from "next/font/google/index";
// font settings

// components
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";

const Layout = ({ children }) => {
  return (
    <div
      className={
        "page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative"
      }
    >
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
