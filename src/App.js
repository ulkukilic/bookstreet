import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Dashboard from "./page/Dashboard";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default App;
