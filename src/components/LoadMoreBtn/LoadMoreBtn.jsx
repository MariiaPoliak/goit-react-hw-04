import PropTypes from "prop-types";
import styles from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ onClick, isLoading }) {
  return (
    <button className={styles.button} onClick={onClick} disabled={isLoading}>
      {isLoading ? (
        <span className="spinner"></span> // You can replace this with a spinner component or an icon
      ) : (
        "Load more"
      )}
    </button>
  );
}

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default LoadMoreBtn;
