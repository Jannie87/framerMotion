import Button from "./Button";
import "./header.css";

function Header(props) {
  return (
    <header>
      <div className="header">
        <h1>Framer Motion</h1>
        <span>
          <em> A simple example by: Jannie Bäckman Kuurne</em>
        </span>
      </div>
      <Button />
    </header>
  );
}

export default Header;
