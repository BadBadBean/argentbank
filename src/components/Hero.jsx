import PropTypes from 'prop-types'

export default function Hero({ imageSrc, title, subtitle }) {
  return (
    <div className="hero" style={{ backgroundImage: `url(${imageSrc})` }}>
      <div className="hero__content">
        {title.split('.').map((sentence, index) => (
          sentence.trim() && <h3 key={index} className="hero__title">{sentence.trim()}.</h3>
        ))}
        <p className="hero__subtitle">{subtitle}</p>
      </div>
    </div>
  )
}

Hero.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}
