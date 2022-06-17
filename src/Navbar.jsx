import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./styles.css";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { isLight, toggleTheme } = useContext(ThemeContext);
  console.log(isLight);
  return (
    <div>
      Navbar
      <button onClick={toggleTheme}>{`Make ${
        isLight ? "dark" : "light"
      }`}</button>
    </div>
  );
};

export default Navbar;
