import { useSearch } from "../context/SearchContext";

const Search = () => {
  const { searchTerm, setSearchTerm, clearSearch } = useSearch();

  return (
    <div className="row mb-4">
      <div className="col-md-6 col-lg-4">
        <div className="input-group">
          <span className="input-group-text bg-primary text-white">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Kitap veya yazar ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button 
              className="btn btn-outline-secondary" 
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
