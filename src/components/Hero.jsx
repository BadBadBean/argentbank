import PropTypes from 'prop-types';

function Hero({ imageSrc, title, subtitle }) {
  return (
    <div className="hero" style={{ backgroundImage: `url(${imageSrc})` }}>
      <div className="hero_content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

Hero.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Hero;
