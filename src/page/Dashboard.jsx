import BookList from "../components/BookList";
import Search from "../components/Search";

const Dashboard = () => {
  return (
    <main className="container py-5">
      <div className="mb-4">
        <h2 className="fw-bold text-dark mb-1">
          <i className="bi bi-grid-3x3-gap me-2 text-primary"></i>
          Ürünler
        </h2>
        <hr className="mt-3 mb-4" style={{ opacity: "0.1" }} />
      </div>
      <Search />
      <BookList />
    </main>
  );
};

export default Dashboard;
