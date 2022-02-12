import { Component } from "react";
import "./main.css";
import { motion } from "framer-motion";

class Main extends Component {
  render() {
    return (
      <main className="container">
        <div className="round-boxes">
          <motion.div drag className="one" />
          <motion.div
            drag
            whileTap={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["50%", "50%", "40%", "50%", "50%"],
            }}
            className="two"
          />
          <motion.div drag className="three" />
          <motion.div drag className="four" />
        </div>
      </main>
    );
  }
}

export default Main;
