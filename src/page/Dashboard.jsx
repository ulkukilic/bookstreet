import BookList from "../components/BookList";
import Search from "../components/Search";

const Dashboard = () => {
  return (
    <main className="container py-4">
      <h2 className="mb-4">
        <i className="bi bi-grid me-2"></i>
        Ürünler
      </h2>
      <Search />
      <BookList />
    </main>
  );
};

export default Dashboard;
