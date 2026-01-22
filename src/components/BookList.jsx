import { useEffect, useState } from "react";
import { fetchBooks } from "../api/bookService";
import BookCard from "./BookCard";
import { useSearch } from "../context/SearchContext";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchTerm } = useSearch();

  useEffect(() => {
    fetchBooks()
      .then(setBooks)
      .finally(() => setLoading(false));
  }, []);

  // Arama filtresi
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
          <span className="visually-hidden">Yükleniyor...</span>
        </div>
        <p className="mt-3 text-secondary">Ürünler yükleniyor...</p>
      </div>
    );
  }

  if (filteredBooks.length === 0) {
    return (
      <div className="text-center py-5">
        <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: "120px", height: "120px" }}>
          <i className="bi bi-search display-4 text-secondary"></i>
        </div>
        <h4 className="text-dark fw-bold">Sonuç bulunamadı</h4>
        <p className="text-secondary">"{searchTerm}" için sonuç bulunamadı.</p>
      </div>
    );
  }

  return (
    <>
      <p className="text-secondary mb-4">
        <span className="badge bg-primary rounded-pill me-2">{filteredBooks.length}</span>
        kitap bulundu
      </p>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {filteredBooks.map((book) => (
          <div className="col" key={book.id}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </>
  );
};

export default BookList;
