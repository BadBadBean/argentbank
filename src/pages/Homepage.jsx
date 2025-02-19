import Hero from "../components/Hero";
import Feature from "../components/Feature";
import backgroundImage from "../assets/images/bank-tree.webp"
import featuresData from "../data/features.json"

import chatIcon from "../assets/icons/icon-chat.png"
import moneyIcon from "../assets/icons/icon-money.png"
import securityIcon from "../assets/icons/icon-security.png"

const icons = {
  "icon-chat.png": chatIcon,
  "icon-money.png": moneyIcon,
  "icon-security.png": securityIcon
};

function Homepage() {
  return (
    <main>
        <Hero 
          imageSrc={backgroundImage}
          title="No fees. No minimum deposit. High interest rates."
          subtitle="Open a savings account with Argent Bank today!"
        />
        <section className="features-container">
        {featuresData.map((feature) => (
          <Feature
            key={feature.id}
            icon={icons[feature.icon]}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </section>
    </main>
  );
}
export default Homepage;
