import PropTypes from "prop-types";

export default function Hero({ imageSrc, imageSrcSet, title, subtitle }) {
  return (
    <section className="hero">
      <img 
        src={imageSrc} 
        srcSet={imageSrcSet} 
        sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 100vw"
        alt="" 
        className="hero__image" 
        width="100%" 
      />
      <div className="hero__content">
        <h2 className="sr-only">Promoted Content</h2>
        {title.split(".").map(
          (sentence, index) =>
            sentence.trim() && (
              <h3 key={index} className="hero__title">
                {sentence.trim()}.
              </h3>
            )
        )}
        <p className="hero__subtitle">{subtitle}</p>
      </div>
    </section>
  );
}

Hero.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageSrcSet: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

Hero.defaultProps = {
  imageSrcSet: "",
};
