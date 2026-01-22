import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThmeToggleContext";
import Login from "../page/Login";

const Header = () => {
  const { user, logout, clearError } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    clearError();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top border-bottom">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary d-flex align-items-center" href="/">
            <i className="bi bi-book-half me-2 fs-4"></i>
            BookStreet
          </a>
          <div className="d-flex align-items-center gap-3">
            <button 
              className="btn btn-outline-secondary rounded-circle p-2 d-flex align-items-center justify-content-center" 
              onClick={toggleTheme}
              style={{ width: "40px", height: "40px" }}
            >
              <i className={`bi ${theme === 'light' ? 'bi-moon-fill' : 'bi-sun-fill'}`}></i>
            </button>

            {user ? (
              <div className="d-flex align-items-center gap-3">
                <span className="text-secondary fw-medium d-flex align-items-center">
                  <i className="bi bi-person-circle me-2 fs-5"></i>
                  {user.name}
                </span>
                <button className="btn btn-outline-danger rounded-pill px-3" onClick={logout}>
                  <i className="bi bi-box-arrow-right me-1"></i>
                  Çıkış
                </button>
              </div>
            ) : (
              <button 
                className="btn btn-primary rounded-pill px-4" 
                onClick={handleOpenModal}
              >
                <i className="bi bi-person-fill me-1"></i>
                Giriş
              </button>
            )}
          </div>
        </div>
      </nav>

      {showModal && <Login onClose={handleCloseModal} />}
    </>
  );
};

export default Header;
