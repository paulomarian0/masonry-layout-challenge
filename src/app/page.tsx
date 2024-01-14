import Image from "next/image";
import { Header } from "./components/Header";
import { Photos } from "./components/Photos";

export default function Home() {
  return (
    <main>
      <Header />
      <Photos />
    </main>
  );
}
