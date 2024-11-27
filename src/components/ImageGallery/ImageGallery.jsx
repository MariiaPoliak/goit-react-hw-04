import PropTypes from "prop-types";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

function ImageGallery({ images, onClick }) {
  return (
    <ul className={styles.imageGallery}>
      {images.map((image) => (
        <li key={image.id}>
          <div className={styles.imageCard}>
            <ImageCard image={image} onClick={onClick} />
          </div>
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
