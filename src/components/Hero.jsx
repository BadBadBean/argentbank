import PropTypes from 'prop-types'

export default function Hero({ imageSrc, title, subtitle }) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${imageSrc})` }}>
      <div className="hero__content">
        <h2 className='sr-only'>Promoted Content</h2>
        {title.split('.').map((sentence, index) => (
          sentence.trim() && <h3 key={index} className="hero__title">{sentence.trim()}.</h3>
        ))}
        <p className="hero__subtitle">{subtitle}</p>
      </div>
    </section>
  )
}

Hero.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}
