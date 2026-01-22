import { useSearch } from "../context/SearchContext";

const Search = () => {
  const { searchTerm, setSearchTerm, clearSearch } = useSearch();

  return (
    <div className="row mb-4">
      <div className="col-md-6 col-lg-5">
        <div className="input-group input-group-lg shadow-sm rounded-pill overflow-hidden border">
          <span className="input-group-text bg-white border-0 ps-4">
            <i className="bi bi-search text-secondary"></i>
          </span>
          <input
            type="text"
            className="form-control border-0 py-3"
            placeholder="Kitap veya yazar ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ boxShadow: "none" }}
          />
          {searchTerm && (
            <button 
              className="btn btn-link text-secondary border-0 pe-4" 
              onClick={clearSearch}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
