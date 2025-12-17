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
    <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">
              <i className="bi bi-person-lock me-2"></i>
              Giriş Yap
            </h5>
            <button 
              type="button" 
              className="btn-close btn-close-white" 
              onClick={handleClose}
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              {error && (
                <div className="alert alert-danger">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  {error}
                </div>
              )}
              <div className="mb-3">
                <label className="form-label">Kullanıcı Adı</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Kullanıcı adınızı girin"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Şifre</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Şifrenizi girin"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="alert alert-info small">
                <strong>Demo Hesaplar:</strong><br />
                admin / admin123<br />
                user / user123<br />
                demo / demo123
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleClose}>
                İptal
              </button>
              <button type="submit" className="btn btn-primary">
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
