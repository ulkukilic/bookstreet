const BookCard = ({ book }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img 
        src={book.thumbnail} 
        className="card-img-top" 
        alt={book.title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate" title={book.title}>
          {book.title}
        </h5>
        <p className="card-text text-muted small mb-1">
          <i className="bi bi-person me-1"></i>
          {book.author}
        </p>
        <p className="card-text text-muted small">
          <i className="bi bi-bookmark me-1"></i>
          {book.category}
        </p>
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="badge bg-success fs-6">{book.price} ₺</span>
            <span className="text-warning">
              <i className="bi bi-star-fill"></i> {book.rating}
            </span>
          </div>
          <button className="btn btn-primary w-100">
            <i className="bi bi-cart-plus me-1"></i>
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
