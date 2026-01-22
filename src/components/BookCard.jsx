const BookCard = ({ book }) => {
  return (
    <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{ transition: "all 0.3s ease" }}>
      <div className="position-relative">
        <img 
          src={book.thumbnail} 
          className="card-img-top" 
          alt={book.title}
          style={{ height: "220px", objectFit: "cover" }}
        />
        <span className="position-absolute top-0 end-0 m-3 badge bg-white text-warning shadow-sm rounded-pill px-3 py-2">
          <i className="bi bi-star-fill me-1"></i>{book.rating}
        </span>
      </div>
      <div className="card-body d-flex flex-column p-4">
        <h6 className="card-title fw-bold text-truncate mb-2" title={book.title}>
          {book.title}
        </h6>
        <p className="card-text text-secondary small mb-1">
          <i className="bi bi-person me-1"></i>
          {book.author}
        </p>
        <p className="card-text small mb-3">
          <span className="badge bg-light text-secondary rounded-pill">
            <i className="bi bi-bookmark me-1"></i>
            {book.category}
          </span>
        </p>
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="fs-5 fw-bold text-primary">{book.price} ₺</span>
          </div>
          <button className="btn btn-primary w-100 rounded-pill py-2">
            <i className="bi bi-cart-plus me-1"></i>
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
