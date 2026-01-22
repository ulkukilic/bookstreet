import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = ({ onClose }) => {
  const { login, error, clearError } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      setUsername("");
      setPassword("");
      onClose();
    }
  };

  const handleClose = () => {
    setUsername("");
    setPassword("");
    clearError();
    onClose();
  };

  return (
    <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
          <div className="modal-header border-0 bg-white py-4">
            <h5 className="modal-title fw-bold text-dark">
              <i className="bi bi-person-lock me-2 text-primary"></i>
              Giriş Yap
            </h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={handleClose}
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body px-4 pb-4">
              {error && (
                <div className="alert alert-danger border-0 rounded-3">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  {error}
                </div>
              )}
              <div className="mb-4">
                <label className="form-label fw-medium text-secondary">Kullanıcı Adı</label>
                <input
                  type="text"
                  className="form-control form-control-lg border-2 rounded-3"
                  placeholder="Kullanıcı adınızı girin"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label fw-medium text-secondary">Şifre</label>
                <input
                  type="password"
                  className="form-control form-control-lg border-2 rounded-3"
                  placeholder="Şifrenizi girin"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="alert alert-light border small rounded-3">
                <strong>Demo Hesaplar:</strong><br />
                admin / admin123<br />
                user / user123<br />
                demo / demo123
              </div>
            </div>
            <div className="modal-footer border-0 bg-light px-4 py-3">
              <button type="button" className="btn btn-outline-secondary rounded-pill px-4" onClick={handleClose}>
                İptal
              </button>
              <button type="submit" className="btn btn-primary rounded-pill px-4">
                <i className="bi bi-box-arrow-in-right me-1"></i>
                Giriş Yap
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
