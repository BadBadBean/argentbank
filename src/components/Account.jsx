import PropTypes from "prop-types"

export default function Account({ title, amount, description, button }) {
  return (
    <div className="account">
      <div className="account__content">
      <h3 className="account__title">{title}</h3>
      <p className="account__amount">{amount}</p>
      <p className="account__description">{description}</p>
      </div>
      {button}
    </div>
  );
}

Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.element,
}
