import PropTypes from "prop-types";

function Feature({ icon, title, text }) {
  return (
    <div className="feature">
      <img className="feature-icon" src={icon} alt={title}/>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-text">{text}</p>
    </div>
  );
}

Feature.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Feature;
