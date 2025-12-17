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
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Yükleniyor...</span>
        </div>
        <p className="mt-2">Ürünler yükleniyor...</p>
      </div>
    );
  }

  if (filteredBooks.length === 0) {
    return (
      <div className="text-center py-5">
        <i className="bi bi-search display-1 text-muted"></i>
        <h4 className="mt-3 text-muted">Sonuç bulunamadı</h4>
        <p className="text-muted">"{searchTerm}" için sonuç bulunamadı.</p>
      </div>
    );
  }

  return (
    <>
      <p className="text-muted mb-3">{filteredBooks.length} kitap bulundu</p>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
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
