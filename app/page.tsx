import Hero from "./components/Hero";
import PoetryList from "./components/PoetryList"; // import your poetry list

export default function HomePage() {
  return (
    <main>
      <Hero />
      <PoetryList /> {/* Display your poetry list on homepage */}
      {/* You can add other sections here */}
    </main>
  );
}
