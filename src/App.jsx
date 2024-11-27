import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { Toaster } from "react-hot-toast";
import "./App.css";

const ACCESS_KEY = "T0VycIvJ_66qnoa1i83cVrkkFp_R0MJxLstqnhDCAuM";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    setIsLoading(true);
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query, page, per_page: 12 },
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      })
      .then((response) => {
        if (page === 1) {
          setImages(response.data.results); // ресет
        } else {
          setImages((prev) => [...prev, ...response.data.results]); // додати фото
        }
      })
      .catch((err) => {
        setError(err?.response?.data?.message || "Error loading images"); // помилка
      })
      .finally(() => setIsLoading(false));
  }, [query, page]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1); // ресет до початкового стану
  };

  const loadMoreImages = () => setPage((prev) => prev + 1);

  return (
    <div className="app">
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onClick={setSelectedImage} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={loadMoreImages} /> //кнопка load-more
      )}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          image={selectedImage}
          onClose={() => setSelectedImage(null)} //закриваємо модалку
        />
      )}
      <Toaster />
    </div>
  );
}

export default App;
