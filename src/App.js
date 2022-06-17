import Navbar from "./Navbar";
import "./styles.css";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

export default function App() {
  const { isLight } = useContext(ThemeContext);
  return (
    <div className={`App ${isLight ? "light" : "dark"}`}>
      <Navbar />
    </div>
  );
}
