import PropTypes from "prop-types"

export default function Button({ type, label, onClick, buttonClass }) {
  const className = `btn ${buttonClass ? buttonClass : ""}`
    return (
      <button type={type} onClick={onClick} className={className}>
        {label}
      </button>
    )
}

Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    label: PropTypes.string.isRequired, 
    onClick: PropTypes.func,
    buttonClass: PropTypes.oneOf(["edit__button", "account__button"]),
}
