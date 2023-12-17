// @react-server-client-only
import Image from "next/image";
import Nav from "./nav";
import Body from "./main";
import Footer from "./footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Nav />
      <Body />
      <Footer />
    </main>
  );
}
