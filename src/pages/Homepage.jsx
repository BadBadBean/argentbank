import Hero from "../components/Hero";
import Feature from "../components/Feature";
import backgroundImage from "../assets/images/bank-tree-1650w.webp";
import backgroundImageMedium from "../assets/images/bank-tree-800w.webp";
import backgroundImageSmall from "../assets/images/bank-tree-400w.webp";
import featuresData from "../data/features.json"

import chatIcon from "../assets/icons/icon-chat.png"
import moneyIcon from "../assets/icons/icon-money.png"
import securityIcon from "../assets/icons/icon-security.png"

const icons = {
  "icon-chat.png": chatIcon,
  "icon-money.png": moneyIcon,
  "icon-security.png": securityIcon
};

export default function Homepage() {
  return (
    <main>
        <Hero 
          imageSrc={backgroundImage} 
          imageSrcSet={`${backgroundImageSmall} 400w, ${backgroundImageMedium} 800w, ${backgroundImage} 1650w`}
          title={`No fees.\nNo minimum deposit.\nHigh interest rates.`}
          subtitle="Open a savings account with Argent Bank today!"
        />
        <section className="features">
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
  )
}
