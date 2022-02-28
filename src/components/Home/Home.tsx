import { useState } from "react";
import Hero from "./Hero";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTable = () => setIsOpen(!isOpen);

  return (
    <main>
      <Hero toggleTable={toggleTable} isOpen={isOpen} />
    </main>
  );
}
