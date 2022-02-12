import { Component } from "react";
import "./main.css";
import { motion } from "framer-motion";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="container">
        <div className="round-boxes">
          <motion.div drag className="one" />
          <motion.div drag className="two" />
          <motion.div drag className="three" />
          <motion.div drag className="four" />
        </div>
      </main>
    );
  }
}

export default Main;
