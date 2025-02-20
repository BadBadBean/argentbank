import PropTypes from "prop-types"

export default function Feature({ icon, title, text }) {
  return (
    <div className="features">
      <img className="features__icon" src={icon} alt={title}/>
      <h3 className="features__title">{title}</h3>
      <p className="features__text">{text}</p>
    </div>
  );
}

Feature.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
