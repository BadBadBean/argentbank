import Hero from "../components/Hero";
import Feature from "../components/Feature";
import backgroundImage from "../assets/images/bank-tree.webp"

function Homepage() {
  return (
    <main>
        <Hero 
          imageSrc={backgroundImage}
          title="No fees. No minimum deposit. High interest rates."
          subtitle="Open a savings account with Argent Bank today!"
        />
        <Feature />
    </main>
  );
}
export default Homepage;
