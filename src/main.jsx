import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./styles/Index.module.css";

const rootElement = document.getElementById("root");
createRoot(rootElement).render(<App />);