import PropTypes from "prop-types";
import "./ErrorMessage.module.css";

function ErrorMessage({ message }) {
  return <div className="error-messag">{message}</div>;
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
