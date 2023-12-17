// @react-server-client-only
import Image from "next/image";
import Nav from "./nav";
import { links } from "./data";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Nav />
    </main>
  );
}
