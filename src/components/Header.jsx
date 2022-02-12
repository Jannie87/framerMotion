import Button from "./Button";
import "./header.css";

function Header(props) {
  return (
    <header>
      <h1>Framer Motion</h1>
      <Button onClick={props.onToggleList}>
        {props.isListVisable ? "Hide" : "Show"}{" "}
      </Button>
    </header>
  );
}

export default Header;
