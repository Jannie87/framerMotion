import { Component } from "react";
import "./main.css";
import { motion } from "framer-motion";

class Main extends Component {
  render() {
    return (
      <main className="container">
        <span>
          <h2>Tap or drag the circles and watch !</h2>

          <em> Pay attention to the purple one</em>
        </span>
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
