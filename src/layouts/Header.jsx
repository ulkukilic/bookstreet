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
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="/">
            <i className="bi bi-book me-2"></i>
            BookStreet
          </a>
          <div className="d-flex align-items-center gap-2">
            <button 
              className="btn btn-outline-light btn-sm" 
              onClick={toggleTheme}
            >
              <i className={`bi ${theme === 'light' ? 'bi-moon-fill' : 'bi-sun-fill'}`}></i>
            </button>

            {user ? (
              <div className="d-flex align-items-center gap-2">
                <span className="text-light">
                  <i className="bi bi-person-circle me-1"></i>
                  {user.name}
                </span>
                <button className="btn btn-danger btn-sm" onClick={logout}>
                  <i className="bi bi-box-arrow-right me-1"></i>
                  Çıkış
                </button>
              </div>
            ) : (
              <button 
                className="btn btn-light btn-sm" 
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
