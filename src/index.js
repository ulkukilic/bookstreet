import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";
import "./App.css";
import { composeProviders } from "./utils/composeProviders";
import { AuthProvider } from "./context/AuthContext";
import { NotificationProvider } from "./context/NotificationContext";
import { ThemeProvider } from "./context/ThmeToggleContext";
import { SearchProvider } from "./context/SearchContext";

const AppProviders = composeProviders([
  ThemeProvider,
  AuthProvider,
  NotificationProvider,
  SearchProvider,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProviders>
    <App />
  </AppProviders>
);
